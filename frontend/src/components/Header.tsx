import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Clock, Layers, BarChart2, Settings, Copy, PanelRight, Upload, Download, FileJson, ChevronDown, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  scenarios: Array<{ id: string; title: string }>;
  activeScenario: string;
  onSelectScenario: (id: string) => void;
  onRunSimulation: () => void;
  onOpenWindow: (windowKey: string) => void;
  onToggleSidebar: () => void;
  onUploadScenarioJson: (json: any) => void;
  onExportScenarioJson?: () => void;
  onExportResultsJson?: () => void;
  onResetState?: () => void;
  isSidebarOpen: boolean;
  isSimulating: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  scenarios,
  activeScenario,
  onSelectScenario,
  onRunSimulation,
  onOpenWindow,
  onToggleSidebar,
  onUploadScenarioJson,
  onExportScenarioJson,
  onExportResultsJson,
  onResetState,
  isSidebarOpen,
  isSimulating
}) => {
  const [utcTime, setUtcTime] = useState<string>('');
  const [isExportMenuOpen, setIsExportMenuOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const exportMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (exportMenuRef.current && !exportMenuRef.current.contains(e.target as Node)) {
        setIsExportMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          onUploadScenarioJson(parsed);
        } catch (err) {
          alert('Ошибка чтения JSON файла. Проверьте формат файла.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <header className="hdr-container">
      <style>{`
        .hdr-container {
          height: 48px;
          background-color: #16181d;
          border-bottom: 1px solid #282c34;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          z-index: 100;
          color: #e2e8f0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 13px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        }

        .hdr-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hdr-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          letter-spacing: -0.2px;
          color: #f8fafc;
          margin-right: 6px;
          user-select: none;
        }

        .hdr-brand-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.35);
        }

        .hdr-divider {
          width: 1px;
          height: 20px;
          background-color: #2d323b;
          margin: 0 2px;
        }

        .hdr-select-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .hdr-label {
          color: #94a3b8;
          font-size: 12px;
          font-weight: 500;
        }

        .hdr-select {
          height: 32px;
          background-color: #20242b;
          color: #f1f5f9;
          border: 1px solid #333943;
          border-radius: 6px;
          padding: 0 10px;
          font-size: 12px;
          font-weight: 500;
          outline: none;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .hdr-select:hover {
          background-color: #272c35;
          border-color: #454d5b;
        }

        .hdr-btn {
          height: 32px;
          padding: 0 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          box-sizing: border-box;
          white-space: nowrap;
          transition: all 0.15s ease-in-out;
          outline: none;
          user-select: none;
        }

        .hdr-btn-secondary {
          background-color: #20242b;
          color: #cbd5e1;
          border: 1px solid #333943;
        }

        .hdr-btn-secondary:hover {
          background-color: #282d36;
          color: #f8fafc;
          border-color: #454d5b;
        }

        .hdr-btn-secondary:active {
          background-color: #1c1f26;
        }

        .hdr-btn-primary {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #ffffff;
          border: 1px solid #3b82f6;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
        }

        .hdr-btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-color: #60a5fa;
          box-shadow: 0 3px 10px rgba(37, 99, 235, 0.45);
        }

        .hdr-btn-primary:disabled {
          background: #2a303c;
          color: #64748b;
          border-color: #333943;
          box-shadow: none;
          cursor: not-allowed;
        }

        .hdr-btn-danger {
          background-color: #20242b;
          color: #f87171;
          border: 1px solid #333943;
        }

        .hdr-btn-danger:hover {
          background-color: #2d1f23;
          color: #ef4444;
          border-color: #7f1d1d;
        }

        .hdr-clock {
          height: 32px;
          display: flex;
          align-items: center;
          gap: 6px;
          background-color: #1a1d22;
          padding: 0 12px;
          border-radius: 6px;
          border: 1px solid #2d323b;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12px;
          color: #38bdf8;
          user-select: none;
        }

        .hdr-toggle-btn {
          width: 32px;
          height: 32px;
          padding: 0;
          border-radius: 6px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease-in-out;
          box-sizing: border-box;
        }

        .hdr-toggle-btn.active {
          background-color: #1e293b;
          color: #38bdf8;
          border: 1px solid #0284c7;
        }

        .hdr-toggle-btn.inactive {
          background-color: #20242b;
          color: #94a3b8;
          border: 1px solid #333943;
        }

        .hdr-toggle-btn.inactive:hover {
          background-color: #282d36;
          color: #f8fafc;
          border-color: #454d5b;
        }

        .hdr-dropdown-menu {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          background-color: #1a1d24;
          border: 1px solid #333943;
          border-radius: 8px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 240px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          z-index: 200;
        }

        .hdr-dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          background: transparent;
          border: none;
          border-radius: 6px;
          color: #e2e8f0;
          cursor: pointer;
          text-align: left;
          transition: background-color 0.15s ease;
          width: 100%;
        }

        .hdr-dropdown-item:hover {
          background-color: #262b35;
        }

        @media (max-width: 1024px) {
          .hdr-container {
            overflow-x: auto;
            gap: 12px;
            padding: 0 10px;
          }
          .hdr-section {
            flex-shrink: 0;
          }
        }

        @media (max-width: 768px) {
          .hdr-container {
            height: 52px;
          }
          .hdr-brand-text {
            display: none;
          }
          .hdr-clock-text {
            display: none;
          }
          .hdr-label {
            display: none;
          }
        }
      `}</style>

      {/* Brand & Scenario Selector & Upload */}
      <div className="hdr-section">
        <div className="hdr-brand">
          <div className="hdr-brand-icon">
            <Layers size={16} />
          </div>
          <span className="hdr-brand-text">Система Анализа Группировки</span>
        </div>

        <div className="hdr-divider" />

        <div className="hdr-select-wrapper">
          <span className="hdr-label">Сценарий:</span>
          <select
            className="hdr-select"
            value={activeScenario}
            onChange={(e) => onSelectScenario(e.target.value)}
          >
            {scenarios.map(s => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
        </div>

        {/* Upload JSON Button */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".json"
          style={{ display: 'none' }}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="hdr-btn hdr-btn-secondary"
          title="Загрузить пользовательский сценарий из JSON файла"
        >
          <Upload size={14} style={{ color: '#34d399' }} />
          <span>Загрузить JSON</span>
        </button>

        {/* Export JSON Dropdown Button */}
        <div style={{ position: 'relative' }} ref={exportMenuRef}>
          <button
            onClick={() => setIsExportMenuOpen(!isExportMenuOpen)}
            className="hdr-btn hdr-btn-secondary"
            title="Скачать итоговый JSON сценарий или результаты моделирования"
          >
            <Download size={14} style={{ color: '#38bdf8' }} />
            <span>Скачать JSON</span>
            <ChevronDown size={12} style={{ opacity: 0.7 }} />
          </button>

          {isExportMenuOpen && (
            <div className="hdr-dropdown-menu">
              {onExportScenarioJson && (
                <button
                  onClick={() => {
                    onExportScenarioJson();
                    setIsExportMenuOpen(false);
                  }}
                  className="hdr-dropdown-item"
                >
                  <FileJson size={16} style={{ color: '#34d399' }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '12px' }}>Итоговый Сценарий (.json)</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Конфигурация cosmo-A-1.0</div>
                  </div>
                </button>
              )}

              {onExportResultsJson && (
                <button
                  onClick={() => {
                    onExportResultsJson();
                    setIsExportMenuOpen(false);
                  }}
                  className="hdr-dropdown-item"
                >
                  <BarChart2 size={16} style={{ color: '#38bdf8' }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '12px' }}>Результаты Симуляции (.json)</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Метрики видимости, SLA, маршруты</div>
                  </div>
                </button>
              )}
            </div>
          )}
        </div>

        <button
          onClick={onRunSimulation}
          disabled={isSimulating}
          className="hdr-btn hdr-btn-primary"
        >
          {isSimulating ? <RotateCcw size={14} className="animate-spin" /> : <Play size={14} />}
          <span>{isSimulating ? 'Расчет...' : 'Запустить Симуляцию'}</span>
        </button>
      </div>

      {/* Windows Shortcuts */}
      <div className="hdr-section">
        <button
          onClick={() => onOpenWindow('emergency')}
          className="hdr-btn"
          style={{
            backgroundColor: '#3b1212',
            color: '#ff6666',
            border: '1px solid #7f1d1d'
          }}
          title="Запустить симуляцию событий ЧС и посмотреть экономическую компенсацию"
        >
          <ShieldAlert size={14} style={{ color: '#ff4444' }} />
          <span>Симуляция ЧС</span>
        </button>

        <button onClick={() => onOpenWindow('analytics')} className="hdr-btn hdr-btn-secondary">
          <BarChart2 size={14} style={{ color: '#38bdf8' }} />
          <span>Аналитика & Гантт</span>
        </button>

        <button onClick={() => onOpenWindow('configurator')} className="hdr-btn hdr-btn-secondary">
          <Settings size={14} style={{ color: '#a78bfa' }} />
          <span>Конфигуратор</span>
        </button>

        <button onClick={() => onOpenWindow('compare')} className="hdr-btn hdr-btn-secondary">
          <Copy size={14} style={{ color: '#fbbf24' }} />
          <span>Сравнение Проектов</span>
        </button>

        {onResetState && (
          <button
            onClick={onResetState}
            className="hdr-btn hdr-btn-danger"
            title="Сбросить все сохраненные настройки страницы"
          >
            <RotateCcw size={13} />
            <span>Сбросить</span>
          </button>
        )}
      </div>

      {/* Right UTC Tracker & Outliner Toggle */}
      <div className="hdr-section">
        <div className="hdr-clock">
          <Clock size={14} />
          <span>{utcTime}</span>
        </div>

        <button
          onClick={onToggleSidebar}
          title="Панель элементов (Аутлайнер)"
          className={`hdr-toggle-btn ${isSidebarOpen ? 'active' : 'inactive'}`}
        >
          <PanelRight size={16} />
        </button>
      </div>
    </header>
  );
};
