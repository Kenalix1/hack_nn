import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, ShieldAlert, Zap, ArrowRight, RefreshCcw, Compass, Check } from 'lucide-react';
import { ScenarioData, SatelliteOutage } from '../types';

interface EmergencyRecommendationsModalProps {
  scenario: ScenarioData | null;
  outages: SatelliteOutage[];
  onApplyRecommendation: (recType: string) => void;
}

export const EmergencyRecommendationsModal: React.FC<EmergencyRecommendationsModalProps> = ({
  scenario,
  outages,
  onApplyRecommendation
}) => {
  const [dismissedRecs, setDismissedRecs] = useState<Set<string>>(new Set());

  const hasOutages = outages.length > 0;
  const overallAvail = scenario?.simulation_result?.overall_availability ?? 1.0;
  const isSlaBreached = overallAvail < 0.90 || scenario?.simulation_result?.all_targets_met === false;

  const recommendationsList = [
    {
      id: 'reroute_isl',
      title: '1. Динамическая перемаршрутизация ISL графа',
      desc: 'Перенаправить поток данных в обход отказавших аппаратов через смежную орбитную плоскость P2 (узлы S09, S10).',
      btnText: 'Применить перемаршрутизацию ISL',
      icon: <Zap size={15} style={{ color: '#ffaa00' }} />
    },
    {
      id: 'phase_shift',
      title: '2. Фазовый сдвиг плоскости (+15° Phase)',
      desc: 'Сдвинуть фазирование соседней плоскости для ликвидации мертвой зоны над северными пунктами Мурманск и Печора.',
      btnText: 'Выполнить фазовый сдвиг (+15°)',
      icon: <RefreshCcw size={15} style={{ color: '#1473e6' }} />
    },
    {
      id: 'raan_adjust',
      title: '3. Корректировка RAAN плоскости (+10°)',
      desc: 'Повернуть орбитальную плоскость вокруг оси Земли для компенсации сектора зоны покрытия.',
      btnText: 'Скооректировать RAAN (+10°)',
      icon: <Compass size={15} style={{ color: '#00ff88' }} />
    }
  ];

  const visibleRecs = recommendationsList.filter(r => !dismissedRecs.has(r.id));

  const handleApply = (recId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissedRecs(prev => new Set(prev).add(recId));
    onApplyRecommendation(recId);
  };

  if ((!isSlaBreached && !hasOutages) || visibleRecs.length === 0) {
    return (
      <div style={containerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00ff88' }}>
          <CheckCircle2 size={16} />
          <span style={{ fontWeight: 600 }}>
            {!isSlaBreached && !hasOutages
              ? `Система функционирует штатно (SLA ${(overallAvail * 100).toFixed(1)}% ≥ 90%)`
              : 'Все рекомендации применены! Система оптимизирована.'}
          </span>
        </div>
        <p style={{ fontSize: '11px', color: '#aaa', margin: '4px 0 0 0' }}>
          {!isSlaBreached && !hasOutages
            ? 'Доступность сети выдержана на высоком уровне. Корректирующие рекомендации не требуются.'
            : 'Активные сбои ликвидированы, маршруты перестроены.'}
        </p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #383838', paddingBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff3b30' }}>
          <ShieldAlert size={18} />
          <span style={{ fontWeight: 'bold', fontSize: '13px' }}>Аварийная Ситуация: Рекомендации Регламента</span>
        </div>
        <span style={{ fontSize: '10px', backgroundColor: '#ff3b3020', color: '#ff3b30', padding: '2px 6px', borderRadius: '3px' }}>
          Нажмите на предложение, чтобы применить и убрать
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
        {visibleRecs.map((rec) => (
          <div
            key={rec.id}
            onClick={(e) => handleApply(rec.id, e)}
            style={{
              ...recCardStyle,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              borderLeft: '3px solid #1473e6'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {rec.icon}
                <b style={{ color: '#fff', fontSize: '12px' }}>{rec.title}</b>
              </div>
              <span style={{ fontSize: '10px', color: '#00ff88', opacity: 0.8 }}>[Нажмите, чтобы применить]</span>
            </div>
            <p style={{ fontSize: '11px', color: '#ccc', margin: '4px 0 0 0', lineHeight: '1.4' }}>
              {rec.desc}
            </p>
            <button
              onClick={(e) => handleApply(rec.id, e)}
              style={actionBtnStyle}
            >
              <span>{rec.btnText}</span>
              <ArrowRight size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  backgroundColor: '#1f1f1f',
  border: '1px solid #383838',
  borderRadius: '6px',
  padding: '12px',
  marginTop: '12px'
};

const recCardStyle: React.CSSProperties = {
  backgroundColor: '#141414',
  border: '1px solid #333',
  borderRadius: '4px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px'
};

const actionBtnStyle: React.CSSProperties = {
  marginTop: '4px',
  backgroundColor: '#1473e6',
  color: '#fff',
  border: 'none',
  borderRadius: '3px',
  padding: '5px 10px',
  fontSize: '11px',
  fontWeight: 600,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  alignSelf: 'flex-start'
};
