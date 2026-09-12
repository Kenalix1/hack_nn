import React, { useRef } from 'react';
import { Layers, Upload, Download, Trash2, CheckCircle2, Plus, FileJson, Play } from 'lucide-react';

interface ScenariosModalProps {
  scenarios: Array<{ id: string; title: string }>;
  activeScenarioId: string;
  onSelectScenario: (id: string) => void;
  onUploadScenarioJson: (json: any) => void;
  onDeleteScenario: (id: string) => void;
  onExportScenarioJson?: () => void;
  onOpenConfigurator: () => void;
}

export const ScenariosModal: React.FC<ScenariosModalProps> = ({
  scenarios,
  activeScenarioId,
  onSelectScenario,
  onUploadScenarioJson,
  onDeleteScenario,
  onExportScenarioJson,
  onOpenConfigurator
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          onUploadScenarioJson(parsed);
          if (fileInputRef.current) fileInputRef.current.value = '';
        } catch (err) {
          alert('Ошибка чтения JSON файла. Проверьте формат файла.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', overflowY: 'auto' }}>
      {/* Header Info & Actions */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#161d28',
        border: '1px solid #3f3f46',
        borderRadius: '6px',
        padding: '12px 14px',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f8fafc', fontWeight: 600, fontSize: '13px' }}>
          <Layers size={18} />
          <span>Менеджер Сценариев ({scenarios.length})</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json"
            style={{ display: 'none' }}
          />
          
          <button
            onClick={() => fileInputRef.current?.click()}
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Upload size={14} />
            <span>Загрузить свой JSON</span>
          </button>

          <button
            onClick={onOpenConfigurator}
            style={{
              backgroundColor: '#20242b',
              color: '#a78bfa',
              border: '1px solid #333943',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Plus size={14} />
            <span>Новый в Конфигураторе</span>
          </button>
        </div>
      </div>

      {/* Scenario Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
        {scenarios.map((sc) => {
          const isActive = sc.id === activeScenarioId || sc.id === activeScenarioId.replace('.json', '');

          return (
            <div
              key={sc.id}
              style={{
                backgroundColor: isActive ? '#142238' : '#1f1f1f',
                border: `1px solid ${isActive ? '#1473e6' : '#383838'}`,
                borderRadius: '6px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FileJson size={16} style={{ color: isActive ? '#38bdf8' : '#888' }} />
                    <span style={{ fontWeight: 600, fontSize: '13px', color: isActive ? '#ffffff' : '#e0e0e0' }}>
                      {sc.title}
                    </span>
                  </div>
                  {isActive && (
                    <span style={{
                      backgroundColor: '#00ff8820',
                      color: '#00ff88',
                      border: '1px solid #00ff8850',
                      borderRadius: '4px',
                      padding: '2px 6px',
                      fontSize: '10px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      whiteSpace: 'nowrap'
                    }}>
                      <CheckCircle2 size={11} /> Активный
                    </span>
                  )}
                </div>
                <span style={{ fontSize: '11px', color: '#888', fontFamily: 'monospace' }}>
                  ID: {sc.id}
                </span>
              </div>

              {/* Action Buttons Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid #2d323b' }}>
                {!isActive ? (
                  <button
                    onClick={() => onSelectScenario(sc.id)}
                    style={{
                      backgroundColor: '#1473e620',
                      color: '#38bdf8',
                      border: '1px solid #1473e650',
                      borderRadius: '4px',
                      padding: '4px 10px',
                      fontSize: '11px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Play size={12} />
                    <span>Выбрать этот сценарий</span>
                  </button>
                ) : (
                  <span style={{ fontSize: '11px', color: '#00ff88', fontWeight: 500 }}>
                    Текущая конфигурация
                  </span>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {onExportScenarioJson && isActive && (
                    <button
                      onClick={onExportScenarioJson}
                      title="Скачать JSON этого сценария"
                      style={{
                        backgroundColor: '#20242b',
                        color: '#94a3b8',
                        border: '1px solid #333943',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        fontSize: '11px',
                        cursor: 'pointer'
                      }}
                    >
                      <Download size={12} />
                    </button>
                  )}

                  {scenarios.length > 1 && (
                    <button
                      onClick={() => onDeleteScenario(sc.id)}
                      title="Удалить данный сценарий"
                      style={{
                        backgroundColor: '#2b1b1b',
                        color: '#ff6666',
                        border: '1px solid #7f1d1d',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        fontSize: '11px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Trash2 size={12} />
                      <span>Удалить</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
