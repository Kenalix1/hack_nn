import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Layers, BarChart2, Settings, Copy, PanelRight, ShieldAlert, FileText } from 'lucide-react';

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
  onOpenPdfReport?: () => void;
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
  onOpenPdfReport,
  onResetState,
  isSidebarOpen,
  isSimulating
}) => {
  const [isExportMenuOpen, setIsExportMenuOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const exportMenuRef = useRef<HTMLDivElement>(null);

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
          justify-content: flex-start;
          gap: 12px;
          padding: 0 16px;
          z-index: 100;
          color: #e2e8f0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 13px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          overflow-x: auto;
          overflow-y: hidden;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #1473e6 #16181d;
        }

        .hdr-container::-webkit-scrollbar {
          height: 3px;
        }
        .hdr-container::-webkit-scrollbar-track {
          background: #16181d;
        }
        .hdr-container::-webkit-scrollbar-thumb {
          background: #1473e6;
          border-radius: 2px;
        }

        .hdr-section {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
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
          background: linear-gradient(135deg, #52525b, #27272a);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
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
          background-color: #1a1d22;
          color: #f8fafc;
          border: 1px solid #333943;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 12px;
          outline: none;
          cursor: pointer;
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
          gap: 6px;
          transition: all 0.15s ease-in-out;
          white-space: nowrap;
          box-sizing: border-box;
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
          background: #ffffff;
          color: #000000;
          border: 1px solid #ffffff;
          box-shadow: 0 2px 6px rgba(255, 255, 255, 0.2);
          font-weight: 600;
        }

        .hdr-btn-primary:hover:not(:disabled) {
          background: #e2e8f0;
          border-color: #cbd5e1;
          box-shadow: 0 3px 10px rgba(255, 255, 255, 0.35);
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
            gap: 8px;
            padding: 0 8px;
          }
        }

        @media (max-width: 768px) {
          .hdr-container {
            height: 48px;
          }
          .hdr-brand-text {
            display: none;
          }
          .hdr-label {
            display: none;
          }
          .hdr-clock {
            font-size: 11px;
            padding: 0 8px;
          }
        }
      `}</style>

      {/* Brand & Scenario Selector & Upload */}
      <div className="hdr-section">
        <div className="hdr-brand" title="Система Анализа Группировки">
          <div className="hdr-brand-icon">
            <Layers size={16} />
          </div>
        </div>

        <div className="hdr-divider" />

        <button
          onClick={() => onOpenWindow('scenarios')}
          className="hdr-btn hdr-btn-secondary"
          title="Открыть отдельное окно управления сценариями"
        >
          <Layers size={14} style={{ color: '#38bdf8' }} />
          <span>Сценарии</span>
        </button>

        <button
          onClick={onRunSimulation}
          disabled={isSimulating}
          className="hdr-btn hdr-btn-primary"
        >
          {isSimulating ? <RotateCcw size={14} className="animate-spin" /> : <Play size={14} />}
          <span>{isSimulating ? 'Расчет...' : 'Запустить Симуляцию'}</span>
        </button>
      </div>

      {/* Windows Shortcuts (Desktop) */}
      <div className="hdr-section hdr-shortcuts-desktop">
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

        {onOpenPdfReport && (
          <button
            onClick={onOpenPdfReport}
            className="hdr-btn hdr-btn-secondary"
            style={{ backgroundColor: '#1e293b', borderColor: '#38bdf8', color: '#38bdf8' }}
            title="Сгенерировать 4-страничный научно-технический PDF отчёт"
          >
            <FileText size={14} />
            <span>Отчёт PDF</span>
          </button>
        )}

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

    </header>
  );
};
