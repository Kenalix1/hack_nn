import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Clock } from 'lucide-react';

interface TimelineBarProps {
  currentTime: number;
  maxTime: number;
  stepSeconds: number;
  onChangeStep: (step: number) => void;
  onChangeTime: (fn: (prev: number) => number) => void;
}

export const TimelineBar: React.FC<TimelineBarProps> = ({
  currentTime,
  maxTime = 86400,
  stepSeconds,
  onChangeStep,
  onChangeTime
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(stepSeconds.toString());

  useEffect(() => {
    setInputValue(stepSeconds.toString());
  }, [stepSeconds]);

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        onChangeTime(prev => {
          const next = prev + stepSeconds;
          return next >= maxTime ? 0 : next;
        });
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isPlaying, stepSeconds, maxTime, onChangeTime]);

  const formatHours = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `+${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStepInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valStr = e.target.value;
    setInputValue(valStr);
    const num = parseInt(valStr, 10);
    if (!isNaN(num) && num > 0) {
      onChangeStep(num);
    }
  };

  const currentPercent = Math.min(100, Math.round((currentTime / maxTime) * 100));

  return (
    <>
      <style>{`
        .timeline-bar-root {
          position: absolute;
          bottom: 24px;
          right: 24px;
          width: 860px;
          max-width: calc(100% - 48px);
          display: flex;
          align-items: center;
          gap: 14px;
          z-index: 85;
          background-color: rgba(10, 15, 26, 0.94);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 12px;
          padding: 10px 18px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.15);
          backdrop-filter: blur(14px);
          color: #e2e8f0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 13px;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        .timeline-controls-cluster {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .timeline-slider-cluster {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 160px;
        }

        .timeline-range-input {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: #1e293b;
          outline: none;
          cursor: pointer;
          margin: 4px 0;
        }

        .timeline-range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #38bdf8;
          border: 2px solid #ffffff;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.9);
          cursor: pointer;
          transition: transform 0.1s ease;
        }

        .timeline-range-input::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }

        .timeline-range-input::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #38bdf8;
          border: 2px solid #ffffff;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.9);
          cursor: pointer;
        }

        .timeline-step-cluster {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .timeline-clock-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: "SF Mono", Consolas, Menlo, monospace;
          background-color: rgba(6, 18, 36, 0.95);
          border: 1px solid rgba(56, 189, 248, 0.35);
          padding: 6px 12px;
          border-radius: 8px;
          color: #38bdf8;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
          white-space: nowrap;
        }

        /* Mobile & Tablet Responsive Layout */
        @media (max-width: 768px) {
          .timeline-bar-root {
            bottom: 10px;
            left: 10px;
            right: 10px;
            width: auto;
            max-width: none;
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background-color: rgba(7, 12, 22, 0.97);
            border: 1.5px solid rgba(56, 189, 248, 0.4);
            box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.85);
          }

          .timeline-mobile-top-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 8px;
          }

          .timeline-controls-cluster {
            gap: 6px;
          }

          .timeline-controls-cluster button {
            width: 38px !important;
            height: 38px !important;
          }

          .timeline-step-cluster span {
            display: none;
          }

          .timeline-step-input {
            width: 54px !important;
            font-size: 12px !important;
            padding: 4px 6px !important;
          }

          .timeline-clock-badge {
            font-size: 12px;
            padding: 5px 8px;
          }

          .timeline-slider-cluster {
            width: 100%;
          }

          .timeline-range-input {
            height: 10px;
          }

          .timeline-range-input::-webkit-slider-thumb {
            width: 24px;
            height: 24px;
          }

          .timeline-range-input::-moz-range-thumb {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>

      <div className="timeline-bar-root">
        {/* Top / Main Controls Area */}
        <div className="timeline-mobile-top-row" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Playback Buttons */}
          <div className="timeline-controls-cluster">
            <button
              onClick={() => onChangeTime(prev => Math.max(0, prev - stepSeconds))}
              style={btnStyle}
              title="Шаг назад"
            >
              <SkipBack size={18} />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                ...btnStyle,
                backgroundColor: isPlaying ? '#ef4444' : '#0284c7',
                color: '#fff',
                border: 'none',
                boxShadow: isPlaying ? '0 0 14px rgba(239, 68, 68, 0.6)' : '0 0 14px rgba(2, 132, 199, 0.6)'
              }}
              title={isPlaying ? 'Пауза' : 'Воспроизведение'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
            </button>

            <button
              onClick={() => onChangeTime(prev => Math.min(maxTime, prev + stepSeconds))}
              style={btnStyle}
              title="Шаг вперед"
            >
              <SkipForward size={18} />
            </button>
          </div>

          {/* Manual Step Seconds Input */}
          <div className="timeline-step-cluster">
            <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600, whiteSpace: 'nowrap' }}>
              Шаг:
            </span>
            <input
              type="number"
              min="1"
              max="86400"
              value={inputValue}
              onChange={handleStepInputChange}
              className="timeline-step-input"
              style={{
                width: '64px',
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                color: '#34d399',
                border: '1px solid #334155',
                borderRadius: '6px',
                padding: '6px 8px',
                fontSize: '12px',
                fontWeight: 700,
                outline: 'none',
                textAlign: 'center',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)'
              }}
              title="Шаг моделирования (секунды)"
            />
            <span style={{ fontSize: '11px', color: '#64748b' }}>с</span>
          </div>

          {/* Time Offset Counter */}
          <div className="timeline-clock-badge">
            <Clock size={15} style={{ color: '#38bdf8' }} />
            <span>{formatHours(currentTime)}</span>
          </div>
        </div>

        {/* Interactive Time Slider */}
        <div className="timeline-slider-cluster">
          <input
            type="range"
            min="0"
            max={maxTime}
            step={stepSeconds}
            value={currentTime}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              onChangeTime(() => val);
            }}
            className="timeline-range-input"
          />
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '11px',
            color: '#94a3b8',
            fontFamily: 'monospace',
            fontWeight: 600,
            padding: '0 2px'
          }}>
            <span style={{ color: '#64748b' }}>T=0с</span>
            <span style={{ color: '#38bdf8', fontWeight: 800 }}>{currentPercent}% орбиты</span>
            <span style={{ color: '#64748b' }}>T=24ч</span>
          </div>
        </div>
      </div>
    </>
  );
};

const btnStyle: React.CSSProperties = {
  backgroundColor: 'rgba(30, 41, 59, 0.9)',
  color: '#ffffff',
  border: '1px solid rgba(71, 85, 105, 0.7)',
  borderRadius: '8px',
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(4px)',
  transition: 'all 0.15s ease'
};
