import React, { useState } from 'react';
import { Terminal, ChevronUp, ChevronDown } from 'lucide-react';
import { LogMessage } from '../types';

interface EventLogPanelProps {
  logs: LogMessage[];
}

export const EventLogPanel: React.FC<EventLogPanelProps> = ({ logs }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div style={{
      position: 'fixed',
      bottom: '12px',
      left: '16px',
      width: '420px',
      maxWidth: 'calc(100vw - 32px)',
      zIndex: 80,
      backgroundColor: '#1a1a1a',
      border: '1px solid #383838',
      borderRadius: '6px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
      overflow: 'hidden',
      fontFamily: 'monospace',
      fontSize: '11px'
    }}>
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
  );
};
