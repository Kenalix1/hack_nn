# Техническая документация: модуль расчётного движка (`calc_engine.py`)

## Назначение

`calc_engine.py` — центральный модуль симуляции. Принимает сценарий группировки и выполняет **полный расчёт** доступности сети на всём временном горизонте. Отвечает за:

- Построение графа связности на каждом временном шаге
- Маршрутизацию (Dijkstra) от клиентов до шлюзов
- Классификацию причин отказов
- Агрегацию показателей (доступность, перерывы, уязвимости)
- Экономический анализ и генерацию рекомендаций
- Экспорт результатов в формате `cosmo-A-result-1.0`

## Архитектура

```
run_simulation(scenario, settings)
    ├── geometry.validate(scenario)
    ├── ProcessPoolExecutor
    │   └── compute_step(scenario, t_s, ...) × 720 шагов
    │       ├── geometry.snapshot(scenario, t_s)
    │       ├── nx.Graph() → рёбра из snap['edges']
    │       ├── nx.shortest_path(G, client, gateway, weight='weight')
    │       └── classify_cause() → 4 типа причин
    ├── aggregate_client_stats()
    ├── compute_outage_intervals()
    ├── satellite_health_model()
    ├── economic_analysis()
    └── return full_result
```

## Ключевые функции

### `compute_step(scenario, t_s, min_elev, clients, gateway_ids) → dict`

Вычисляет состояние сети для **одного** временного шага. Эта функция выполняется в отдельных процессах параллельно.

**Алгоритм:**

1. **Получить snapshot** из `geometry.snapshot(scenario, t_s)`.
2. **Построить граф** NetworkX:
   - Узлы: активные спутники (type='sat') + наземные пункты (type='client'/'gateway')
   - Рёбра: из `snap['edges']` с весами = дистанция в км
3. **Определить offline шлюзы** (по `gateway_outages`).
4. **Для каждого клиента:**
   - Определить видимые спутники (elevation ≥ min_elev, КА активен)
   - Найти кратчайший путь до каждого доступного шлюза
   - Проверить, что промежуточные узлы — только спутники
   - Выбрать путь с минимальной суммарной дистанцией
   - При отсутствии пути — классифицировать причину

**Классификация причин отказа:**

```
if нет видимого спутника → no_visible_sat
elif нет доступного шлюза (outage) → gateway_outage
elif шлюз не видит спутников → gateway_unreachable
else → isl_disconnected  (граф несвязен)
```

**Возвращает:**

```python
{
    't_s': 120,
    'snap': {...},                    # Полный snapshot
    'step_routes': {                  # Маршруты по клиентам
        'C65': ['C65', 'S04', 'S20', 'G_MUR'],
        'C70': [],
        'C72': ['C72', 'S06', 'S05', 'S04', 'G_MUR']
    },
    'client_step_data': {             # Детали по каждому клиенту
        'C65': {
            'has_visibility': True,
            'best_path': ['C65', 'S04', 'S20', 'G_MUR'],
            'best_length': 4966.07,
            'cause': None,
            'visible_sats': ['S04', 'S19', 'S20']
        },
        ...
    }
}
```

### `run_simulation(scenario, settings) → dict`

Главная точка входа. Оркестрирует вычисление всех 720 шагов и агрегирует результаты.

**Параллелизация:**

```python
with ProcessPoolExecutor() as executor:
    futures = {
        executor.submit(compute_step, scenario, t_s, ...): t_s
        for t_s in range(0, 86400, 120)
    }
    results = sorted(
        [f.result() for f in as_completed(futures)],
        key=lambda x: x['t_s']
    )
```

720 шагов распределяются по всем ядрам CPU. На 8-ядерной машине полная симуляция выполняется за ~10–30 секунд.

**Агрегация показателей по каждому клиенту:**

| Показатель | Формула |
|------------|---------|
| `visibility_ratio` | visible_steps / total_steps |
| `availability_ratio` | connected_steps / total_steps |
| `max_outage_s` | max(duration интервалов без маршрута) |
| `avg_hops` | mean(len(path) - 1) для шагов с маршрутом |
| `avg_distance_km` | mean(суммарная длина пути) |
| `target_met` | availability_ratio ≥ target_availability |

**Интервалы перерывов:**

Алгоритм конечного автомата:
1. Состояние `in_outage = False`
2. Для каждого шага: если `connected = False` и `in_outage = False` → начинаем интервал
3. Если `connected = True` и `in_outage = True` → закрываем интервал
4. Если дошли до конца горизонта в состоянии `in_outage` → закрываем с `end = horizon`

**Модель здоровья спутников:**

Для каждого КА вычисляется:

- **Температура:**

$$T = \min\left(92, T_{\text{base}} + \frac{\text{usage}}{N_{\text{steps}}} \times 16 + \text{hash\_offset} \times 0.8\right)$$

где $T_{\text{base}} = 42°C$ (на Солнце) или $26°C$ (в тени).

- **Топливо (ксенон):**

$$F_{\text{used}} = 0.1 + (\text{RAAN} \bmod 60) \times 0.04 + (\text{Phase} \bmod 360) \times 0.015 + \text{usage} \times 0.05$$

$$F_{\text{remaining}} = \max(0,\ 10 - F_{\text{used}})$$

- **Критические алерты:**
  - Перегрев: $T \geq 80°C$ (critical) или $T \geq 70°C$ (warning)
  - Низкое топливо: $F_{\%} \leq 15\%$ (critical) или $F_{\%} \leq 25\%$ (warning)

**Экономический анализ:**

$$\text{CAPEX} = N_{\text{active}} \times \$650{,}000$$

$$\text{OPEX}_{\text{annual}} = N_{\text{active}} \times \$45{,}000$$

$$\text{SLA\_penalties} = N_{\text{unmet}} \times \$120{,}000$$

$$\text{Total\_annual\_cost} = \text{OPEX} + \text{SLA\_penalties}$$

### `export_cosmo_result(scenario, simulation_result) → dict`

Формирует выходной файл формата `cosmo-A-result-1.0`.

**Ключевая деталь:** для **каждой** пары `(t_s, client_id)` генерируется запись. Если маршрут отсутствует, `path = []`.

```python
for step_item in simulation_result['routes_by_time']:
    t_s = step_item['t_s']
    routes_at_step = step_item.get('routes', {})
    for client_id in client_ids:
        path = routes_at_step.get(client_id, [])
        routes_list.append({
            't_s': t_s,
            'client_id': client_id,
            'path': path
        })
```

Общее число записей: 720 шагов × 3 клиента = 2160.

## Структура выходных данных

```python
{
    'scenario_meta': {...},
    'environment': {...},
    'design': {...},
    'total_satellites': 48,
    'active_satellites': 48,
    'overall_availability': 0.9563,
    'all_targets_met': True,
    'satellites_status': {
        'S01': {
            'temperature_c': 44.2,
            'overheated': False,
            'fuel_kg': 8.73,
            'fuel_pct': 87.3,
            'is_in_sunlight': True
        }, ...
    },
    'critical_alerts': [...],
    'economic_analysis': {
        'unit_capex_usd': 650000.0,
        'annual_opex_usd': 2160000.0,
        'annual_sla_penalties_usd': 0,
        'total_capex_usd': 31200000.0,
        'total_annual_cost_usd': 2160000.0,
        'unmet_clients_count': 0,
        'economic_recommendations': [...]
    },
    'client_summaries': [{
        'id': 'C65',
        'visibility_ratio': 0.9847,
        'availability_ratio': 0.9563,
        'target_met': True,
        'max_outage_s': 1200,
        'outage_count': 3,
        'outage_intervals': [...],
        'outage_causes': {
            'no_visible_sat': 5,
            'isl_disconnected': 8,
            'gateway_unreachable': 0,
            'gateway_outage': 0
        },
        'avg_hops': 3.42,
        'avg_distance_km': 4231.7,
        'time_series': [...]
    }, ...],
    'vulnerability': {
        'top_used_satellites': [
            {'satellite_id': 'S04', 'route_appearances': 587},
            {'satellite_id': 'S20', 'route_appearances': 512},
            ...
        ]
    },
    'time_steps': [0, 120, 240, ...],
    'routes_by_time': [...],
    'snapshots': [...]
}
```

## Зависимости

- `networkx` — построение графа и алгоритм Dijkstra
- `numpy` — агрегация статистик (mean, max)
- `concurrent.futures` — параллелизация по процессам
- `backend.geometry` — математическое ядро
