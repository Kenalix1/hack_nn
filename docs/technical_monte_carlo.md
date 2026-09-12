# Техническая документация: модуль Монте-Карло (`monte_carlo.py`, `correlated_failures.py`, `scenario_generator.py`, `analytics.py`, `parallel_runner.py`)

## Назначение

Стек Монте-Карло — это группа модулей, отвечающих за **стохастический анализ устойчивости** группировки. Вместо расчёта одного сценария система генерирует сотни вариантов с разными отказами и оценивает **статистическое поведение** сети.

## Архитектура стека

```
┌────────────────────────────────────────────────────┐
│                    API endpoint                     │
│         POST /api/analyze_combinations              │
└────────────────┬───────────────────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │     monte_carlo.py              │
    │  analyze_combinations()         │
    │  generate_monte_carlo_scenarios │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │     scenario_generator.py       │
    │  generate_scenarios()           │
    │  Стратифицированная выборка     │
    │  по k и launch_stage            │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │   correlated_failures.py        │
    │  • CME (солнечная вспышка)      │
    │  • Cascade (каскадный отказ)    │
    │  • Gateway blackout             │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │     parallel_runner.py          │
    │  ProcessPoolExecutor            │
    │  run_mass_simulation()          │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │       analytics.py              │
    │  • Pareto-фронт                 │
    │  • Vulnerability ranking        │
    │  • Гистограммы                  │
    │  • Стратификация                │
    │  • TCO (Total Cost of Ownership)│
    └─────────────────────────────────┘
```

---

## Модуль `monte_carlo.py`

### `generate_monte_carlo_scenarios(base_scenario, settings, num_samples=10)`

Генерирует набор сценариев с различным количеством отказов.

**Стратегия генерации:**

| Вариант | Количество отказов | Метод |
|---------|-------------------|-------|
| 0 | 0 (оптимистичный) | Фиксированный |
| 1 | 10% от N | Фиксированный |
| 2 | 25% от N | Фиксированный |
| 3 | 50% от N | Фиксированный |
| 4–9 | Экспоненциальное | $k = \lfloor\text{Exp}(1.5) \times N/3\rfloor$ |

**Экспоненциальное распределение** для вариантов 4–9 обеспечивает:
- Большинство выборок с малым числом отказов (наиболее вероятные)
- Редкие выборки с большим числом отказов (хвост распределения)

**Вероятность каждого варианта:**

$$P(k) = \binom{N}{k} \cdot p^k \cdot (1-p)^{N-k}$$

Для выборки из Exp(1.5) без фиксированного $k$ — вероятность вычисляется по фактическому $k$.

**Параметры отказов:**
- Каждый отказ начинается в случайный момент из первой половины горизонта: $t_{\text{start}} \in [0, H/2]$
- Отказ длится до конца расчёта: $t_{\text{end}} = H$

### `analyze_combinations(base_scenario, settings)`

Оркестрирует полный Монте-Карло анализ:

1. Генерирует 10 сценариев
2. Для каждого запускает `run_simulation()`
3. Вычисляет **план восстановления** (remediation plan):

| Условие | План | Стоимость |
|---------|------|-----------|
| $k = 0$ | Штатная работа | \$0 |
| $k / N \leq 15\%$ | Программная реконфигурация | \$0 |
| $k / N > 15\%$ | Экстренный запуск | $\lceil k/16 \rceil \times \$15M$ |

4. Вычисляет **математическое ожидание риска**:

$$\text{Risk}_i = P_i \times \text{TotalCost}_i$$

5. Сортирует результаты по вероятности (наиболее вероятные — первые).

---

## Модуль `scenario_generator.py`

### `generate_scenarios(base_scenario, max_scenarios, settings)`

Генератор для расширенного Монте-Карло анализа со **стратификацией по двум осям**:

**Ось 1: Этап развёртывания (launch_stage)**
- Stage 1: 16 КА (одна плоскость)
- Stage 2: 32 КА (две плоскости)
- Stage 3: 48 КА (полная группировка)

**Ось 2: Количество отказов (k)**
- $k = 0, 1, 2, \ldots, \min(N_{\text{active}}, 24)$

**Распределение выборок:**

```python
def allocate_samples(k, n, max_samples):
    if k <= 5:
        return min(300, max_samples // 10)    # Наиболее вероятные k
    elif k <= 10:
        return min(100, max_samples // 20)
    else:
        return min(20, max_samples // 50)     # Крайне редкие k
```

Таким образом, больше вычислительных ресурсов выделяется на **наиболее вероятные** сценарии ($k \leq 5$).

**Нормализация вероятности:**

$$P_{\text{sample}} = \frac{\binom{N}{k} \cdot p^k \cdot (1-p)^{N-k}}{n_{\text{samples}}}$$

Деление на `n_samples` гарантирует, что сумма вероятностей всех выборок для данного $k$ равна биномиальной вероятности.

**Коррелированные отказы:**

В дополнение к независимым отказам добавляются сценарии из `correlated_failures.py`.

---

## Модуль `correlated_failures.py`

### `generate_cme_scenarios(base_scenario, p_daily)`

**Солнечная вспышка (Coronal Mass Ejection):**

Моделирует полный выход из строя всех спутников одной плоскости.

- $P_{\text{CME}} = 10^{-3}$ (суточная вероятность события)
- Вероятность для конкретной плоскости: $P_{\text{CME}} / N_{\text{planes}}$
- Все спутники плоскости отказывают одновременно в случайный момент $t \in [0, H]$

**Физическое обоснование:** При CME спутники на одной орбитальной плоскости подвергаются примерно одинаковой дозе радиации (одинаковая геометрия магнитного щита).

### `generate_cascade_scenarios(base_scenario, p_daily)`

**Каскадный отказ (космический мусор):**

1. Выбираем случайный «стартовый» спутник.
2. Генерируем 2–5 дополнительных отказов с задержкой 300–3600 с.
3. Вероятность каскада: $p^k \times 3$ (повышенная относительно независимых из-за корреляции).

**Физическое обоснование:** Столкновение с мусором генерирует облако обломков, которое через 5–60 минут пересекает орбиты соседних КА (синдром Кесслера).

### `generate_gateway_blackout_scenarios(base_scenario)`

**Отключение шлюза:**

- $P_{\text{GW}} = 5 \times 10^{-3}$
- Длительность: от 1 до 12 часов
- Все спутники продолжают работать, но маршруты через этот шлюз недоступны.

---

## Модуль `parallel_runner.py`

### `run_single_scenario(scenario_entry, settings) → dict`

Обёртка над `run_simulation()` с вычислением экономических показателей:

$$\text{Total Cost} = \text{Recovery Cost} + \text{SLA Penalty}$$

**Recovery Cost:**

| Условие | Формула |
|---------|---------|
| $k = 0$ | \$0 |
| $k \leq 0.15 \times N$ | \$50,000 (перефасовка) |
| $k > 0.15 \times N$ | $k \times \$650{,}000 + \lceil k/16 \rceil \times \$15{,}000{,}000$ |

**SLA Penalty:**

$$\text{Penalty} = \sum_{\text{client}} \begin{cases} \$120{,}000 & \text{if target\_met = false} \\ 0 & \text{otherwise} \end{cases}$$

### `run_mass_simulation(scenarios, settings, on_progress) → list`

Параллельный запуск симуляций через `ProcessPoolExecutor`:

```python
pool = ProcessPoolExecutor(max_workers=cpu_count() - 1)
futures = {pool.submit(run_single_scenario, sc, settings): sc for sc in scenarios}
for future in as_completed(futures):
    results.append(future.result())
```

---

## Модуль `analytics.py`

### Pareto-фронт

**Критерии оптимизации:**
1. `availability` → maximize
2. `total_cost` → minimize
3. `max_outage_s` → minimize

**Доминирование:**

Конфигурация $a$ **доминирует** $b$ ($a \succ b$), если:

$$\forall c \in \{A, C, O\}: f_c(a) \geq f_c(b) \quad \text{AND} \quad \exists c: f_c(a) > f_c(b)$$

где $A$ = availability (↑), $C$ = cost (↓), $O$ = outage (↓).

**Алгоритм:** Наивный $O(n^2)$ — для каждого результата проверяем, доминирует ли его какой-либо другой. Достаточно для $n \leq 1000$.

### Vulnerability Ranking

Для каждого спутника $s$:

$$\text{Impact}(s) = \overline{A}_{\text{baseline}} - \overline{A}_{\text{без } s}$$

где $\overline{A}_{\text{baseline}}$ — доступность без отказов, $\overline{A}_{\text{без } s}$ — средняя доступность при отказе $s$.

Сортировка по убыванию Impact → **первый спутник в списке** наиболее критичен для группировки.

### Гистограммы

```python
def build_histogram(results, key, bins=10):
    counts, bin_edges = np.histogram(values, bins=bins)
    return [{"bin_start": ..., "bin_end": ..., "count": ...}]
```

Строятся для: доступности, стоимости, максимального перерыва.

### Стратификация

Агрегация по двум осям:

1. **По количеству отказов** ($k = 0, 1, 2, \ldots$): средняя доступность, минимальная доступность, средняя стоимость.
2. **По этапу развёртывания** (stage = 1, 2, 3): те же метрики.

### TCO (Total Cost of Ownership)

$$\text{TCO}_{\text{annual}} = \text{CAPEX} + N \times \$45{,}000 + \sum_i \text{Expected Risk}_i$$

---

## Пример использования через API

```bash
curl -X POST http://localhost:8000/api/analyze_combinations \
  -H "Content-Type: application/json" \
  -d '{
    "scenario": { ... },
    "failure_probability": 0.01,
    "emergency_launch_cost_usd": 15000000,
    "launch_delay_days": 14
  }'
```

**Ответ:**

```json
{
    "combinations": [
        {
            "scenario_meta": {"title": "Оптимистичный сценарий"},
            "mc_type": "optimistic",
            "mc_prob": 0.6172,
            "mc_failed_count": 0,
            "overall_availability": 0.9563,
            "all_targets_met": true,
            "remediation_plan": "Штатная работа",
            "remediation_cost": 0,
            "risk_expectation": 1333427.4,
            "total_annual_cost_usd": 2160000
        },
        {
            "scenario_meta": {"title": "Вариант 1: Отказ 5 КА (10%)"},
            "mc_type": "failure",
            "mc_prob": 0.2851,
            "mc_failed_count": 5,
            "overall_availability": 0.8214,
            "all_targets_met": false,
            "remediation_plan": "Программная реконфигурация орбит.",
            "remediation_cost": 0,
            "risk_expectation": 944812.1,
            "total_annual_cost_usd": 2400000
        },
        ...
    ]
}
```
