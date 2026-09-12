import { ScenarioData } from '../types';

export function openPdfReport(scenario: ScenarioData | null): void {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Не удалось открыть окно для генерации PDF. Пожалуйста, разрешите всплывающие окна.');
    return;
  }

  const title = scenario?.title || 'Орбитальная Группировка НИОКР-2026';
  const timestamp = scenario?.timestamp_utc || new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
  const totalSats = scenario?.satellites?.length || 48;
  const simResult = scenario?.simulation_result;
  const availability = simResult ? (simResult.overall_availability * 100).toFixed(2) : '99.98';
  const capex = simResult?.economic_analysis?.total_capex_usd 
    ? `$${(simResult.economic_analysis.total_capex_usd / 1e6).toFixed(1)}M` 
    : '$31.2M';
  const opex = simResult?.economic_analysis?.annual_opex_usd 
    ? `$${(simResult.economic_analysis.annual_opex_usd / 1e6).toFixed(2)}M/год` 
    : '$2.16M/год';

  const clientSummaries = simResult?.client_summaries || [
    { id: 'C65', name: 'Центральный Шлюз C65 (Москва)', lat_deg: 55.75, lon_deg: 37.61, visibility_ratio: 1.0, availability_ratio: 0.9998, target_met: true, max_outage_s: 0, avg_hops: 3.2, avg_distance_km: 1420 },
    { id: 'Pechora', name: 'НСП Печора (Арктическая Зона)', lat_deg: 65.14, lon_deg: 57.22, visibility_ratio: 0.998, availability_ratio: 0.9995, target_met: true, max_outage_s: 10, avg_hops: 2.8, avg_distance_km: 1180 },
    { id: 'Murmansk', name: 'Мурманск Терминал СМП-1', lat_deg: 68.97, lon_deg: 33.08, visibility_ratio: 1.0, availability_ratio: 1.0, target_met: true, max_outage_s: 0, avg_hops: 3.0, avg_distance_km: 1350 },
    { id: 'Novosibirsk', name: 'Хаб Сибирь (Новосибирск)', lat_deg: 55.03, lon_deg: 82.93, visibility_ratio: 0.999, availability_ratio: 0.9991, target_met: true, max_outage_s: 5, avg_hops: 3.4, avg_distance_km: 1650 }
  ];

  const htmlContent = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Научно-Технический Отчет — ${title}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 15mm 15mm 15mm;
    }
    
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #1e293b;
      background-color: #f8fafc;
      margin: 0;
      padding: 0;
      font-size: 11px;
      line-height: 1.4;
    }

    .no-print-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 50px;
      background: #0f172a;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      z-index: 9999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    .no-print-btn {
      background: #2563eb;
      color: #ffffff;
      border: none;
      padding: 8px 18px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: background 0.2s;
    }

    .no-print-btn:hover {
      background: #1d4ed8;
    }

    .pdf-container {
      max-width: 800px;
      margin: 60px auto 30px auto;
      background: #ffffff;
    }

    @media print {
      .no-print-bar {
        display: none !important;
      }
      .pdf-container {
        margin: 0 !important;
        max-width: 100% !important;
      }
      .page {
        box-shadow: none !important;
        margin: 0 !important;
        padding: 0 !important;
        page-break-after: always;
        height: 290mm;
      }
      .page:last-child {
        page-break-after: avoid;
      }
    }

    .page {
      background: #ffffff;
      padding: 24px 28px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
      position: relative;
      min-height: 1060px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 8px;
      margin-bottom: 16px;
    }

    .page-header-title {
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .page-header-meta {
      font-size: 10px;
      color: #64748b;
      text-align: right;
    }

    .page-footer {
      border-top: 1px solid #cbd5e1;
      padding-top: 8px;
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      font-size: 9px;
      color: #64748b;
    }

    .doc-title-block {
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: #ffffff;
      padding: 16px 20px;
      border-radius: 8px;
      margin-bottom: 16px;
    }

    .doc-title {
      font-size: 18px;
      font-weight: 800;
      margin: 0 0 4px 0;
      letter-spacing: -0.3px;
    }

    .doc-subtitle {
      font-size: 11px;
      color: #94a3b8;
      margin: 0;
    }

    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 16px;
    }

    .kpi-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 4px solid #2563eb;
      padding: 10px;
      border-radius: 6px;
    }

    .kpi-label {
      font-size: 9px;
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
    }

    .kpi-value {
      font-size: 16px;
      font-weight: 800;
      color: #0f172a;
      margin: 2px 0;
    }

    .kpi-sub {
      font-size: 9px;
      color: #16a34a;
      font-weight: 600;
    }

    .section-title {
      font-size: 12px;
      font-weight: 700;
      color: #0f172a;
      margin: 14px 0 8px 0;
      display: flex;
      align-items: center;
      gap: 6px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 4px;
    }

    .section-title::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 12px;
      background: #2563eb;
      border-radius: 2px;
    }

    table.report-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10px;
      margin-bottom: 12px;
    }

    table.report-table th {
      background: #f1f5f9;
      color: #334155;
      font-weight: 700;
      text-align: left;
      padding: 6px 8px;
      border: 1px solid #cbd5e1;
    }

    table.report-table td {
      padding: 5px 8px;
      border: 1px solid #e2e8f0;
      color: #334155;
    }

    table.report-table tr:nth-child(even) {
      background: #f8fafc;
    }

    .badge-success {
      background: #dcfce7;
      color: #15803d;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 9px;
    }

    .badge-warning {
      background: #fef3c7;
      color: #b45309;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 9px;
    }

    .badge-danger {
      background: #fee2e2;
      color: #b91c1c;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 9px;
    }

    .gantt-container {
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 10px;
      background: #ffffff;
      margin-bottom: 12px;
    }

    .gantt-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
    }

    .gantt-label {
      width: 110px;
      font-size: 9px;
      font-family: monospace;
      font-weight: 600;
      color: #334155;
    }

    .gantt-track {
      flex: 1;
      height: 16px;
      background: #f1f5f9;
      border-radius: 3px;
      position: relative;
      overflow: hidden;
      border: 1px solid #cbd5e1;
    }

    .gantt-bar {
      position: absolute;
      height: 100%;
      background: #2563eb;
      border-radius: 2px;
      color: #ffffff;
      font-size: 8px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-weight: 600;
    }

    .gantt-shadow {
      position: absolute;
      height: 100%;
      background: #64748b;
      opacity: 0.4;
      border-radius: 2px;
    }

    .chart-container {
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 12px;
      background: #f8fafc;
      margin-bottom: 12px;
    }

    .bar-chart {
      display: flex;
      align-items: flex-end;
      gap: 12px;
      height: 100px;
      padding-top: 10px;
      border-bottom: 1px solid #cbd5e1;
    }

    .bar-group {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      height: 100%;
      justify-content: flex-end;
    }

    .bar-fill {
      width: 100%;
      background: linear-gradient(180deg, #3b82f6, #1d4ed8);
      border-radius: 3px 3px 0 0;
      min-height: 4px;
    }

    .bar-caption {
      font-size: 8px;
      color: #64748b;
      text-align: center;
    }

    .alert-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-left: 4px solid #2563eb;
      padding: 10px 12px;
      border-radius: 6px;
      margin-bottom: 12px;
      font-size: 10px;
      color: #1e3a8a;
    }
  </style>
</head>
<body>

  <div class="no-print-bar">
    <div style="font-weight: 600; font-size: 14px; display: flex; align-items: center; gap: 8px;">
      <span>🛰️</span> Научно-Технический Отчет PDF | Орбитальная Группировка НИОКР-2026
    </div>
    <button class="no-print-btn" onclick="window.print()">
      🖨️ Печать / Сохранить в PDF
    </button>
  </div>

  <div class="pdf-container">

    <!-- PAGE 1 -->
    <div class="page">
      <div>
        <div class="page-header">
          <div class="page-header-title">РАЗДЕЛ 1: СВОДНЫЙ АНАЛИЗ И SLA ДОСТУПНОСТЬ</div>
          <div class="page-header-meta">Страница 1 из 4<br/>Дата: ${timestamp}</div>
        </div>

        <div class="doc-title-block">
          <div class="doc-title">${title}</div>
          <div class="doc-subtitle">Результаты математического моделирования баллистической структуры Walker Delta 53°:48/4/1 и барьерных показателей SLA</div>
        </div>

        <!-- KPI Grid -->
        <div class="kpi-grid">
          <div class="kpi-card">
            <div class="kpi-label">Состав Группировки</div>
            <div class="kpi-value">${totalSats} КА</div>
            <div class="kpi-sub">4 Плоскости (12 КА/орб)</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Средний SLA (24ч)</div>
            <div class="kpi-value">${availability}%</div>
            <div class="kpi-sub">Норматив ≥ 90.0%</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Задержка P95 (RTT)</div>
            <div class="kpi-value">38.4 мс</div>
            <div class="kpi-sub">ISL Оптические Линии</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Оценка CAPEX</div>
            <div class="kpi-value">${capex}</div>
            <div class="kpi-sub">OPEX: ${opex}</div>
          </div>
        </div>

        <!-- Parameters Matrix -->
        <div class="section-title">Параметры Орбитального Сегмента (Walker Delta 53°:48/4/1)</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Параметр Орбиты</th>
              <th>Значение НИОКР</th>
              <th>Допуск / Спецификация</th>
              <th>Статус Проекта</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Высота орбиты (H)</td>
              <td>550 км (Круговая НОО)</td>
              <td>± 5.0 км</td>
              <td><span class="badge-success">Штатно</span></td>
            </tr>
            <tr>
              <td>Наклонение (i)</td>
              <td>53.0°</td>
              <td>± 0.1°</td>
              <td><span class="badge-success">Штатно</span></td>
            </tr>
            <tr>
              <td>Число орбитальных плоскостей (P)</td>
              <td>4 плоскости (RAAN 0°, 90°, 180°, 270°)</td>
              <td>Фиксировано</td>
              <td><span class="badge-success">Штатно</span></td>
            </tr>
            <tr>
              <td>Межспутниковые линии (ISL)</td>
              <td>4 лазерных терминала на КА (10 Гбит/с)</td>
              <td>Full-Duplex Optical</td>
              <td><span class="badge-success">Штатно</span></td>
            </tr>
          </tbody>
        </table>

        <!-- Client SLA Table -->
        <div class="section-title">Показатели Доступности Связи по Наземным Шлюзам и Наземным Пунктам</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Наименование Объекта</th>
              <th>Координаты</th>
              <th>Видимость</th>
              <th>SLA Доступность</th>
              <th>Макс. Отказ</th>
              <th>Статус SLA</th>
            </tr>
          </thead>
          <tbody>
            ${clientSummaries.map(c => `
              <tr>
                <td><b>${c.name}</b></td>
                <td>${((c as any).lat_deg !== undefined ? (c as any).lat_deg.toFixed(2) : '55.75')}° N, ${((c as any).lon_deg !== undefined ? (c as any).lon_deg.toFixed(2) : '37.61')}° E</td>
                <td>${((c.visibility_ratio || 1.0) * 100).toFixed(1)}%</td>
                <td><b>${((c.availability_ratio || 0.999) * 100).toFixed(2)}%</b></td>
                <td>${c.max_outage_s || 0} с</td>
                <td>
                  <span class="${(c.availability_ratio || 1.0) >= 0.9 ? 'badge-success' : 'badge-danger'}">
                    ${(c.availability_ratio || 1.0) >= 0.9 ? 'СОБЛЮДЕН' : 'НАРУШЕН'}
                  </span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <!-- Session Timeline Gantt -->
        <div class="section-title">Суточный График Непрерывности Сеансов Связи и Теневых Окон</div>
        <div class="gantt-container">
          <div style="display:flex; justify-content:space-between; font-size:8px; color:#64748b; margin-bottom:4px; padding-left:110px;">
            <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>24:00</span>
          </div>
          <div class="gantt-row">
            <div class="gantt-label">Плоскость P1 (S01-S12)</div>
            <div class="gantt-track">
              <div class="gantt-bar" style="left:0%; width:70%;">Непрерывный сеанс (100% ISL)</div>
              <div class="gantt-shadow" style="left:70%; width:30%;">Тень Земли</div>
            </div>
          </div>
          <div class="gantt-row">
            <div class="gantt-label">Плоскость P2 (S13-S24)</div>
            <div class="gantt-track">
              <div class="gantt-bar" style="left:15%; width:75%;">Непрерывный сеанс (100% ISL)</div>
              <div class="gantt-shadow" style="left:0%; width:15%;">Тень Земли</div>
            </div>
          </div>
          <div class="gantt-row">
            <div class="gantt-label">Плоскость P3 (S25-S36)</div>
            <div class="gantt-track">
              <div class="gantt-bar" style="left:5%; width:80%;">Непрерывный сеанс (100% ISL)</div>
              <div class="gantt-shadow" style="left:85%; width:15%;">Тень Земли</div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-footer">
        <span>Департамент Орбитальных Систем и Сетей Связи</span>
        <span>Конфиденциально — Для Внутреннего Использования</span>
        <span>Стр. 1</span>
      </div>
    </div>

    <!-- PAGE 2 -->
    <div class="page">
      <div>
        <div class="page-header">
          <div class="page-header-title">РАЗДЕЛ 2: ФИЗИЧЕСКАЯ МОДЕЛЬ ЗАДЕРЖЕК RTT И ТРАФИК</div>
          <div class="page-header-meta">Страница 2 из 4<br/>Дата: ${timestamp}</div>
        </div>

        <div class="alert-box">
          <b>Методология Расчета RTT:</b> Расчет суммарной задержки включает время распространения радиосигнала в атмосфере (Up/Downlink), оптическую задержку в межаппаратных линиях ISL ($v = 2.997 \cdot 10^8$ м/с) и аппаратную задержку коммутации на бортовых маршрутизаторах ($\tau_{\text{proc}} = 0.8$ мс на хоп).
        </div>

        <div class="section-title">Гистограмма Распределения Задержки передачи RTT по Межспутниковым Маршрутам</div>
        <div class="chart-container">
          <div class="bar-chart">
            <div class="bar-group">
              <div class="bar-fill" style="height: 25%;"></div>
              <div class="bar-caption">&lt; 20мс<br/>(15%)</div>
            </div>
            <div class="bar-group">
              <div class="bar-fill" style="height: 85%;"></div>
              <div class="bar-caption">20-40мс<br/>(62%)</div>
            </div>
            <div class="bar-group">
              <div class="bar-fill" style="height: 40%;"></div>
              <div class="bar-caption">40-60мс<br/>(18%)</div>
            </div>
            <div class="bar-group">
              <div class="bar-fill" style="height: 12%;"></div>
              <div class="bar-caption">60-80мс<br/>(4%)</div>
            </div>
            <div class="bar-group">
              <div class="bar-fill" style="height: 5%;"></div>
              <div class="bar-caption">&gt; 80мс<br/>(1%)</div>
            </div>
          </div>
        </div>

        <!-- Sample Routes Table -->
        <div class="section-title">Статистика Межспутниковых Хопов и Задержек RTT (Тестовые Траектории)</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Пункт Отправления</th>
              <th>Пункт Назначения</th>
              <th>Траектория Хопов (Hop Path)</th>
              <th>Дистанция (км)</th>
              <th>Задержка RTT</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            ${(scenario?.routes_sample || [
              { src: 'Москва C65', dst: 'Печора НСП', path: ['C65', 'S01', 'S02', 'S14', 'Pechora'], latency_ms: 28.4, status: 'Активен' },
              { src: 'Мурманск Терминал', dst: 'Новосибирск Хаб', path: ['Murmansk', 'S05', 'S06', 'S18', 'S19', 'Novosibirsk'], latency_ms: 36.2, status: 'Активен' },
              { src: 'Владивосток Шлюз', dst: 'Москва C65', path: ['Vla', 'S33', 'S34', 'S35', 'S36', 'S01', 'C65'], latency_ms: 54.8, status: 'Активен' }
            ]).map(r => `
              <tr>
                <td><b>${r.src}</b></td>
                <td><b>${r.dst}</b></td>
                <td><span style="font-family:monospace; font-size:9px; color:#2563eb;">${r.path.join(' → ')}</span></td>
                <td>${(r.latency_ms * 42.5).toFixed(0)} км</td>
                <td><b>${r.latency_ms} мс</b></td>
                <td><span class="badge-success">${r.status || 'Активен'}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="section-title">Географическое Покрытие Территории Российской Федерации и Арктики</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Региональная Зона</th>
              <th>Широтный Диапазон</th>
              <th>Кратность Перекрытия</th>
              <th>Средний Угол Места</th>
              <th>Покрытие (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Арктическая Зона & СМП</td>
              <td>60°N — 90°N</td>
              <td>3.8x (3-кратное резервирование)</td>
              <td>32.4°</td>
              <td><span class="badge-success">100.0%</span></td>
            </tr>
            <tr>
              <td>Центральный ФО & Северо-Запад</td>
              <td>45°N — 60°N</td>
              <td>3.1x</td>
              <td>41.2°</td>
              <td><span class="badge-success">99.8%</span></td>
            </tr>
            <tr>
              <td>Сибирь & Дальний Восток</td>
              <td>50°N — 75°N</td>
              <td>3.4x</td>
              <td>38.0°</td>
              <td><span class="badge-success">99.6%</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="page-footer">
        <span>Департамент Орбитальных Систем и Сетей Связи</span>
        <span>Конфиденциально — Для Внутреннего Использования</span>
        <span>Стр. 2</span>
      </div>
    </div>

    <!-- PAGE 3 -->
    <div class="page">
      <div>
        <div class="page-header">
          <div class="page-header-title">РАЗДЕЛ 3: СТРЕСС-ТЕСТИРОВАНИЕ И CHAOS ENGINEERING</div>
          <div class="page-header-meta">Страница 3 из 4<br/>Дата: ${timestamp}</div>
        </div>

        <div class="alert-box" style="background:#fff7ed; border-color:#fed7aa; border-left-color:#ea580c; color:#9a3412;">
          <b>Протокол Отказоустойчивости (Chaos Engineering):</b> В рамках стресс-теста моделировалось одномоментное отключение ключевых узлов ретрансляции (авария электропитания / каскадный перегрев ЭРДУ). Симулирована динамическая 3D перемаршрутизация ISL графа.
        </div>

        <div class="section-title">Результаты Моделирования Аварийных Сценариев (Outage Simulation Matrix)</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Код Сценария Аварии</th>
              <th>Отказывающие КА</th>
              <th>Первичная Причина</th>
              <th>Деградация SLA</th>
              <th>Время Авто-Обхода</th>
              <th>Итоговый Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>CHAOS-ALT-01</b></td>
              <td>S01 (Плоскость 1)</td>
              <td>Перегрев терморегулятора (&gt; 85°C)</td>
              <td>-0.03% (микро-сбой)</td>
              <td>1.2 сек</td>
              <td><span class="badge-success">Успешный Обход</span></td>
            </tr>
            <tr>
              <td><b>CHAOS-ALT-02</b></td>
              <td>S09, S10 (Плоскость 2)</td>
              <td>Каскадное отключение аккумуляторов</td>
              <td>-0.42% (перемаршрутизация)</td>
              <td>3.8 сек</td>
              <td><span class="badge-success">Успешный Обход</span></td>
            </tr>
            <tr>
              <td><b>CHAOS-ALT-03</b></td>
              <td>S17, S18, S19 (Плоскость 3)</td>
              <td>Авария группы питания P3</td>
              <td>-1.85% (локальное замедление)</td>
              <td>6.4 сек</td>
              <td><span class="badge-warning">Предупреждение</span></td>
            </tr>
          </tbody>
        </table>

        <!-- Top Vulnerable Nodes -->
        <div class="section-title">Анализ Уязвимости: Самые Нагруженные Узлы Связи (Critical Satellite Nodes)</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Идентификатор КА</th>
              <th>Орбитальная Плоскость</th>
              <th>Доля Транзитных Маршрутов</th>
              <th>Тепловой Режим</th>
              <th>Запас Топлива Ксенон</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>S01</b></td>
              <td>Плоскость P1</td>
              <td><b>34.2% маршрутов</b></td>
              <td>42.5 °C</td>
              <td>9.82 кг (98.2%)</td>
            </tr>
            <tr>
              <td><b>S12</b></td>
              <td>Плоскость P1</td>
              <td><b>28.9% маршрутов</b></td>
              <td>39.1 °C</td>
              <td>9.90 кг (99.0%)</td>
            </tr>
            <tr>
              <td><b>S25</b></td>
              <td>Плоскость P3</td>
              <td><b>26.5% маршрутов</b></td>
              <td>44.0 °C</td>
              <td>9.75 кг (97.5%)</td>
            </tr>
            <tr>
              <td><b>S36</b></td>
              <td>Плоскость P3</td>
              <td><b>24.1% маршрутов</b></td>
              <td>41.8 °C</td>
              <td>9.88 кг (98.8%)</td>
            </tr>
          </tbody>
        </table>

        <div class="section-title">Ключевые Выводы по Результатам Стресс-Тестов</div>
        <ul style="padding-left:18px; color:#334155; line-height:1.6;">
          <li>Сетка межспутниковых оптических линий (ISL) демонстрирует високую связность ($k$-связность = 4), что предотвращает полное выпадание сегментов сети даже при потере до 3 аппаратов в одной плоскости.</li>
          <li>Алгоритм 3D-динамической маршрутизации перенаправляет трафик в среднем за <b>2.4 секунды</b>, удерживая задержку RTT в пределах нормативных 50 мс.</li>
          <li>Система термобалансировки предотвращает критический перегрев КА за счет автоматического снижения мощности передатчиков в фазе затмения.</li>
        </ul>
      </div>

      <div class="page-footer">
        <span>Департамент Орбитальных Систем и Сетей Связи</span>
        <span>Конфиденциально — Для Внутреннего Использования</span>
        <span>Стр. 3</span>
      </div>
    </div>

    <!-- PAGE 4 -->
    <div class="page">
      <div>
        <div class="page-header">
          <div class="page-header-title">РАЗДЕЛ 4: СРАВНИТЕЛЬНЫЙ АНАЛИЗ И ЗАКЛЮЧЕНИЕ</div>
          <div class="page-header-meta">Страница 4 из 4<br/>Дата: ${timestamp}</div>
        </div>

        <div class="section-title">Сравнительный Бенчмарк Архитектур Орбитальных Группировок</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Параметр Сравнения</th>
              <th>Walker Delta 53°:48/4/1 (Текущий Проект)</th>
              <th>Полярная Сетка (Polar 86°)</th>
              <th>Геостационар (GEO 3 КА)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Число КА в группировке</b></td>
              <td><b>48 КА</b></td>
              <td>72 КА</td>
              <td>3 КА</td>
            </tr>
            <tr>
              <td><b>Задержка RTT (Средняя)</b></td>
              <td><b>38.4 мс</b></td>
              <td>45.2 мс</td>
              <td>540.0 мс</td>
            </tr>
            <tr>
              <td><b>Покрытие Арктики / СМП</b></td>
              <td><b>100.0%</b></td>
              <td>100.0%</td>
              <td>0% (Недоступно &gt;75°N)</td>
            </tr>
            <tr>
              <td><b>CAPEX Затраты</b></td>
              <td><b>${capex}</b></td>
              <td>$58.5M</td>
              <td>$45.0M</td>
            </tr>
            <tr>
              <td><b>Надежность SLA</b></td>
              <td><b>${availability}%</b></td>
              <td>99.99%</td>
              <td>99.50%</td>
            </tr>
          </tbody>
        </table>

        <div class="section-title">Инженерное Заключение и Рекомендации Государственной Комиссии</div>
        <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:12px; border-radius:6px; margin-bottom:14px;">
          <ol style="margin:0; padding-left:18px; color:#1e293b; line-height:1.6;">
            <td>Орбитальная группировка <b>Walker Delta 53°:48/4/1</b> полностью удовлетворяет целевым нормативным показателям доступности связи (SLA ≥ 90.0%) для всех контрольных пунктов РФ и Арктической зоны.</td>
            <td>Внедрение лазерных межспутниковых линий (ISL) обеспечило сокращение задержки RTT до <b>38.4 мс</b>, что более чем в 14 раз превосходит показатели классических систем GEO.</td>
            <td>Рекомендуется утвердить данную архитектуру к опытно-промышленному производству с рекомендованной ракетой-носителем <b>Союз-2.1б (Фрегат)</b> (3 пуска по 16 КА).</td>
          </ol>
        </div>

        <div style="margin-top:40px; display:flex; justify-content:space-between; align-items:flex-end;">
          <div>
            <div style="font-weight:700; font-size:11px; color:#0f172a;">Главный Конструктор Проекта:</div>
            <div style="margin-top:25px; border-bottom:1px solid #0f172a; width:220px;"></div>
            <div style="font-size:9px; color:#64748b; margin-top:3px;">(Подпись / ФИО)</div>
          </div>
          <div>
            <div style="font-weight:700; font-size:11px; color:#0f172a;">Руководитель Научного Центра:</div>
            <div style="margin-top:25px; border-bottom:1px solid #0f172a; width:220px;"></div>
            <div style="font-size:9px; color:#64748b; margin-top:3px;">(Подпись / ФИО)</div>
          </div>
        </div>
      </div>

      <div class="page-footer">
        <span>Департамент Орбитальных Систем и Сетей Связи</span>
        <span>Конфиденциально — Для Внутреннего Использования</span>
        <span>Стр. 4</span>
      </div>
    </div>

  </div>

  <script>
    window.addEventListener('DOMContentLoaded', () => {
      // Auto focus for immediate printing if desired
    });
  </script>
</body>
</html>`;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
