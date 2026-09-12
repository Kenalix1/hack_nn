import React, { useState } from 'react';
import { Terminal, ChevronUp, ChevronDown } from 'lucide-react';
import { LogMessage } from '../types';

interface EventLogPanelProps {
  logs: LogMessage[];
}

export const EventLogPanel: React.FC<EventLogPanelProps> = ({ logs }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return false;
    return true;
  });

  return (
    <>
      <style>{`
        .event-log-panel-root {
          position: fixed;
          bottom: 12px;
          left: 16px;
          width: 420px;
          max-width: calc(100vw - 32px);
          z-index: 80;
          background-color: #1a1a1a;
          border: 1px solid #383838;
          border-radius: 6px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.5);
          overflow: hidden;
          font-family: monospace;
          font-size: 11px;
          transition: bottom 0.2s ease;
        }
        @media (max-width: 768px) {
          .event-log-panel-root {
            bottom: 122px;
            left: 10px;
            width: auto;
            max-width: calc(100vw - 20px);
          }
        }
      `}</style>
      <div className="event-log-panel-root">
      {/* Bar Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          padding: '6px 12px',
          backgroundColor: '#242424',
          borderBottom: isExpanded ? '1px solid #383838' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          color: '#ccc',
          fontWeight: 600
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Terminal size={13} style={{ color: '#1473e6' }} />
          <span>Журнал Событий Системы ({logs.length})</span>
        </div>
        {isExpanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
      </div>

      {/* Log Feed */}
      {isExpanded && (
        <div style={{
          maxHeight: '130px',
          overflowY: 'auto',
          padding: '8px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          backgroundColor: '#121212'
        }}>
          {logs.map(log => (
            <div key={log.id} style={{ display: 'flex', gap: '8px', lineHeight: '1.4' }}>
              <span style={{ color: '#666', flexShrink: 0 }}>[{log.time}]</span>
              <span style={{
                color: log.type === 'error' ? '#ff3b30' :
                       log.type === 'warning' ? '#ffaa00' :
                       log.type === 'success' ? '#00ff88' : '#2680eb'
              }}>
                {log.text}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};
