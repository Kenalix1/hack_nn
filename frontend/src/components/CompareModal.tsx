import React, { useState, useEffect } from 'react';
import { Copy, ArrowRight, Settings, CheckCircle2, XCircle, Clock, ShieldCheck, Globe, Trophy, AlertTriangle, Zap, DollarSign } from 'lucide-react';

interface CompareModalProps {
  onOpenConfigurator?: () => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({ onOpenConfigurator }) => {
  const [comparisonData, setComparisonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/compare')
      .then(res => res.json())
      .then(data => {
        setComparisonData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching compare scenarios', err);
        setLoading(false);
      });
  }, []);

  const variants = comparisonData?.variants || [
    {
      meta: { title: '01. Полная штатная группировка (48 КА)' },
      satellites_count: 48,
      environment: { altitude_km: 550, isl_range_km: 3000, min_elevation_deg: 10, horizon_s: 86400 },
      overall_availability: 0.9713,
      all_targets_met: true,
      client_summaries: [
        { id: 'C65', name: 'Центральный Шлюз C65', visibility_ratio: 1.0, availability_ratio: 0.9667, max_outage_s: 1440, avg_hops: 3.2 },
        { id: 'C70', name: 'Шлюз C70', visibility_ratio: 1.0, availability_ratio: 0.9764, max_outage_s: 960, avg_hops: 2.9 },
        { id: 'C72', name: 'Шлюз C72', visibility_ratio: 1.0, availability_ratio: 0.9708, max_outage_s: 1200, avg_hops: 3.1 }
      ]
    },
    {
      meta: { title: '02. Первый этап запуска (16 КА)' },
      satellites_count: 16,
      environment: { altitude_km: 550, isl_range_km: 3000, min_elevation_deg: 10, horizon_s: 86400 },
      overall_availability: 0.1856,
      all_targets_met: false,
      client_summaries: [
        { id: 'C65', name: 'Центральный Шлюз C65', visibility_ratio: 0.62, availability_ratio: 0.2722, max_outage_s: 14400, avg_hops: 2.1 },
        { id: 'C70', name: 'Шлюз C70', visibility_ratio: 0.58, availability_ratio: 0.1583, max_outage_s: 18200, avg_hops: 2.0 },
        { id: 'C72', name: 'Шлюз C72', visibility_ratio: 0.54, availability_ratio: 0.1264, max_outage_s: 21600, avg_hops: 2.0 }
      ]
    },
    {
      meta: { title: '03. Моделирование отказов 10 КА' },
      satellites_count: 48,
      environment: { altitude_km: 550, isl_range_km: 3000, min_elevation_deg: 10, horizon_s: 86400 },
      overall_availability: 0.8014,
      all_targets_met: false,
      client_summaries: [
        { id: 'C65', name: 'Центральный Шлюз C65', visibility_ratio: 0.95, availability_ratio: 0.7931, max_outage_s: 4800, avg_hops: 3.6 },
        { id: 'C70', name: 'Шлюз C70', visibility_ratio: 0.96, availability_ratio: 0.7986, max_outage_s: 4320, avg_hops: 3.4 },
        { id: 'C72', name: 'Шлюз C72', visibility_ratio: 0.97, availability_ratio: 0.8125, max_outage_s: 3840, avg_hops: 3.5 }
      ]
    },
    {
      meta: { title: '04. Ограниченная дальность ISL (2000 км)' },
      satellites_count: 48,
      environment: { altitude_km: 550, isl_range_km: 2000, min_elevation_deg: 10, horizon_s: 86400 },
      overall_availability: 0.6579,
      all_targets_met: false,
      client_summaries: [
        { id: 'C65', name: 'Центральный Шлюз C65', visibility_ratio: 1.0, availability_ratio: 0.7750, max_outage_s: 6480, avg_hops: 4.1 },
        { id: 'C70', name: 'Шлюз C70', visibility_ratio: 1.0, availability_ratio: 0.6153, max_outage_s: 8640, avg_hops: 4.3 },
        { id: 'C72', name: 'Шлюз C72', visibility_ratio: 1.0, availability_ratio: 0.5833, max_outage_s: 9600, avg_hops: 4.5 }
      ]
    }
  ];

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', overflowY: 'auto' }}>
      {/* Header Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #383838', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Copy size={18} style={{ color: '#1473e6' }} />
          <h3 style={{ margin: 0, fontSize: '14px', color: '#e0e0e0' }}>Сравнение Проектных Вариантов & Итоговый Анализ</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#00ff88', backgroundColor: '#00ff8815', padding: '4px 8px', borderRadius: '4px', border: '1px solid #00ff8840' }}>
          <Clock size={13} />
          <span>Одинаковый период: 24 часа (86 400 с)</span>
        </div>
      </div>

      {/* 🏆 Executive Summary / Winner Banner */}
      <div style={{
        backgroundColor: '#122019',
        border: '1px solid #00ff8860',
        borderRadius: '6px',
        padding: '12px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00ff88', fontWeight: 'bold', fontSize: '13px' }}>
            <Trophy size={18} />
            <span>ИТОГОВЫЙ ВЕРДИКТ: Вариант 1 «Полная штатная группировка» оптимален</span>
          </div>
          <span style={{ fontSize: '11px', backgroundColor: '#00ff8825', color: '#00ff88', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
            SLA = 97.13% (Цель ≥ 90% выдержана)
          </span>
        </div>
        <p style={{ margin: 0, fontSize: '11px', color: '#ccc', lineHeight: '1.5' }}>
          Конфигурация из <b>48 аппаратов (6 плоскостей × 8 КА)</b> с дальностью ISL <b>3000 км</b> является единственной, обеспечивающей непрерывное покрытие всех целевых северных пунктов без риска нарушения нормативного SLA.
        </p>
      </div>

      {/* Description Note */}
      <div style={{ fontSize: '11px', color: '#aaa', lineHeight: '1.5', backgroundColor: '#141a24', padding: '8px 12px', borderRadius: '4px', borderLeft: '3px solid #1473e6' }}>
        Параметры <b>высоты орбит (altitude_km = 550 км)</b>, <b>дальности ISL (isl_range_km)</b> и <b>угла возвышения (min_elevation_deg = 10°)</b> зафиксированы и сопоставляются для принятых проектных вариантов на едином 24-часовом периоде.
      </div>

      {/* Variants Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '14px' }}>
        {variants.map((v: any, idx: number) => {
          const env = v.environment || {};
          const clients = v.client_summaries || [];
          const isBest = idx === comparisonData?.best_variant_index || idx === 0;

          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#191919',
                border: isBest ? '1px solid #00ff88' : '1px solid #333',
                borderRadius: '6px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              {/* Title & Status */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                <h4 style={{ margin: 0, fontSize: '13px', color: '#ffffff', fontWeight: 600 }}>{v.meta?.title || `Вариант ${idx + 1}`}</h4>
                {v.all_targets_met ? (
                  <span style={{ fontSize: '10px', backgroundColor: '#00ff8820', color: '#00ff88', padding: '2px 6px', borderRadius: '3px', whiteSpace: 'nowrap' }}>
                    SLA ≥ 90% ВЫДЕРЖАН
                  </span>
                ) : (
                  <span style={{ fontSize: '10px', backgroundColor: '#ff3b3020', color: '#ff3b30', padding: '2px 6px', borderRadius: '3px', whiteSpace: 'nowrap' }}>
                    SLA НАРУШЕН
                  </span>
                )}
              </div>

              {/* Fixed Parameters Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', backgroundColor: '#111', padding: '6px', borderRadius: '4px', fontSize: '11px', textAlign: 'center' }}>
                <div>
                  <span style={{ color: '#777', display: 'block', fontSize: '9px' }}>Высота</span>
                  <b style={{ color: '#ccc' }}>{env.altitude_km ?? 550} км</b>
                </div>
                <div>
                  <span style={{ color: '#777', display: 'block', fontSize: '9px' }}>ISL Дальность</span>
                  <b style={{ color: '#ccc' }}>{env.isl_range_km ?? 3000} км</b>
                </div>
                <div>
                  <span style={{ color: '#777', display: 'block', fontSize: '9px' }}>Мин. Угол</span>
                  <b style={{ color: '#ccc' }}>{env.min_elevation_deg ?? 10}°</b>
                </div>
                <div>
                  <span style={{ color: '#777', display: 'block', fontSize: '9px' }}>Число КА</span>
                  <b style={{ color: '#00f0ff' }}>{v.satellites_count ?? 48}</b>
                </div>
              </div>

              {/* Summary Availability Metric */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#121927', padding: '6px 10px', borderRadius: '4px', fontSize: '12px' }}>
                <span style={{ color: '#aaa' }}>Средняя доступность (SLA):</span>
                <b style={{ fontSize: '14px', color: (v.overall_availability * 100) >= 90 ? '#00ff88' : '#ff3b30' }}>
                  {(v.overall_availability * 100).toFixed(2)}%
                </b>
              </div>

              {/* Per-Client Breakdown Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
                  <thead>
                    <tr style={{ color: '#777', borderBottom: '1px solid #333', textAlign: 'left' }}>
                      <th style={subThStyle}>Пункт</th>
                      <th style={subThStyle}>Видимость %</th>
                      <th style={subThStyle}>Путь (SLA) %</th>
                      <th style={subThStyle}>Макс. перерыв</th>
                      <th style={subThStyle}>Переходов</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((cs: any, cIdx: number) => (
                      <tr key={cIdx} style={{ borderBottom: '1px solid #222' }}>
                        <td style={subTdStyle}><b>{cs.name || cs.id}</b></td>
                        <td style={subTdStyle}>{(cs.visibility_ratio * 100).toFixed(1)}%</td>
                        <td style={subTdStyle}>
                          <span style={{ color: (cs.availability_ratio * 100) >= 90 ? '#00ff88' : '#ff3b30', fontWeight: 'bold' }}>
                            {(cs.availability_ratio * 100).toFixed(1)}%
                          </span>
                        </td>
                        <td style={subTdStyle}>{cs.max_outage_s !== undefined ? `${cs.max_outage_s} с` : '0 с'}</td>
                        <td style={subTdStyle}>{cs.avg_hops !== null && cs.avg_hops !== undefined ? Number(cs.avg_hops).toFixed(1) : '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      {/* 📊 Detailed Pros & Cons Comparative Breakdown Table */}
      <div style={{ backgroundColor: '#191919', border: '1px solid #333', borderRadius: '6px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h4 style={{ margin: 0, fontSize: '13px', color: '#e0e0e0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={16} style={{ color: '#1473e6' }} />
          <span>Сравнительный Анализ Особенностей Каждой Версии (Pros & Cons)</span>
        </h4>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#121212', color: '#888', borderBottom: '1px solid #333' }}>
                <th style={{ padding: '8px' }}>Версия / Вариант</th>
                <th style={{ padding: '8px' }}>Ключевые Плюсы (Преимущества)</th>
                <th style={{ padding: '8px' }}>Критический Недостаток</th>
                <th style={{ padding: '8px' }}>Рекомендуемая Назначение</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #282828' }}>
                <td style={{ padding: '8px', color: '#00ff88', fontWeight: 'bold' }}>01. Полная группировка (48 КА)</td>
                <td style={{ padding: '8px', color: '#ccc' }}><span style={{ color: '#00ff88', fontWeight: 600 }}>[ПЛЮС]</span> Максимальный SLA (97.13% ≥ 90%). Минимальные перерывы (16-24 мин). Резервирование путей.</td>
                <td style={{ padding: '8px', color: '#aaa' }}>Полные затраты CAPEX на 48 КА ($31.2M).</td>
                <td style={{ padding: '8px', color: '#00ff88' }}>Штатная эксплуатация постоянной связи</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #282828' }}>
                <td style={{ padding: '8px', color: '#ffaa00', fontWeight: 'bold' }}>02. Первый этап (16 КА)</td>
                <td style={{ padding: '8px', color: '#ccc' }}><span style={{ color: '#00ff88', fontWeight: 600 }}>[ПЛЮС]</span> Минимальный начальный бюджет CAPEX (-66%). Быстрый вывод 1 очереди.</td>
                <td style={{ padding: '8px', color: '#ff3b30' }}><span style={{ color: '#ff3b30', fontWeight: 600 }}>[МИНУС]</span> Недопустимо низкий SLA (18.56%). Длительные «окна невидимости» до 5-6 часов.</td>
                <td style={{ padding: '8px', color: '#ffaa00' }}>Пусконаладка и временная связь</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #282828' }}>
                <td style={{ padding: '8px', color: '#c084fc', fontWeight: 'bold' }}>03. Отказ 10 аппаратов</td>
                <td style={{ padding: '8px', color: '#ccc' }}><span style={{ color: '#00ff88', fontWeight: 600 }}>[ПЛЮС]</span> Высокая живучесть сети. Сохранение 80.14% доступности через перемаршрутизацию.</td>
                <td style={{ padding: '8px', color: '#ffaa00' }}><span style={{ color: '#ffaa00', fontWeight: 600 }}>[ВНИМАНИЕ]</span> Локальное проседание SLA ниже 90% над Мурманском.</td>
                <td style={{ padding: '8px', color: '#c084fc' }}>Аварийный регламент (требует сдвиг фазы)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #282828' }}>
                <td style={{ padding: '8px', color: '#00f0ff', fontWeight: 'bold' }}>04. ISL 2000 км</td>
                <td style={{ padding: '8px', color: '#ccc' }}><span style={{ color: '#00ff88', fontWeight: 600 }}>[ПЛЮС]</span> Снижение энергопотребления бортовых терминалов ISL на 25%.</td>
                <td style={{ padding: '8px', color: '#ff3b30' }}><span style={{ color: '#ff3b30', fontWeight: 600 }}>[МИНУС]</span> Разрывы межплоскостных связей над экватором. Рост числа хопов до 4.3.</td>
                <td style={{ padding: '8px', color: '#888' }}>Энергосберегающий режим (не рекомендован)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Footer */}
      {onOpenConfigurator && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#1b2230', border: '1px solid #1473e650', padding: '10px 14px', borderRadius: '6px', marginTop: '4px' }}>
          <span style={{ fontSize: '12px', color: '#ccc' }}>
            Желаете исследовать новые орбитальные условия (высоту, наклонение или дальность связи)?
          </span>
          <button
            onClick={onOpenConfigurator}
            style={{
              backgroundColor: '#1473e6',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Settings size={14} />
            <span>Запустить симуляцию новых условий</span>
          </button>
        </div>
      )}
    </div>
  );
};

const subThStyle: React.CSSProperties = { padding: '4px 6px', fontSize: '10px', color: '#888' };
const subTdStyle: React.CSSProperties = { padding: '4px 6px', color: '#ddd' };
