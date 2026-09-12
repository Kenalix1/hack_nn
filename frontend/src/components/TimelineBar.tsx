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

  return (
    <div style={{
      position: 'absolute',
      bottom: '24px',
      right: '24px',
      width: '840px',
      maxWidth: 'calc(100% - 48px)',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      zIndex: 85,
      backgroundColor: 'rgba(15, 23, 42, 0.92)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '12px',
      padding: '12px 20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(12px)',
      color: '#e0e0e0',
      fontSize: '13px'
    }}>
      {/* Playback Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
            backgroundColor: isPlaying ? '#ff3b30' : '#1473e6',
            color: '#fff',
            border: 'none',
            boxShadow: isPlaying ? '0 2px 10px rgba(255, 59, 48, 0.5)' : '0 2px 10px rgba(20, 115, 230, 0.5)'
          }}
          title={isPlaying ? 'Пауза' : 'Воспроизведение'}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <button
          onClick={() => onChangeTime(prev => Math.min(maxTime, prev + stepSeconds))}
          style={btnStyle}
          title="Шаг вперед"
        >
          <SkipForward size={18} />
        </button>
      </div>

      {/* Interactive Time Slider */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '180px' }}>
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
          style={{
            width: '100%',
            accentColor: '#1473e6',
            cursor: 'pointer',
            height: '8px',
            filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.8))'
          }}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: '#aaa',
          fontWeight: 600
        }}>
          <span>T=0с</span>
          <span>{Math.round((currentTime / maxTime) * 100)}%</span>
          <span>T=24ч</span>
        </div>
      </div>

      {/* Manual Step Seconds Input */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontSize: '12px', color: '#ccc', fontWeight: 600, whiteSpace: 'nowrap' }}>Шаг (сек):</span>
        <input
          type="number"
          min="1"
          max="86400"
          value={inputValue}
          onChange={handleStepInputChange}
          style={{
            width: '64px',
            backgroundColor: 'rgba(25, 30, 45, 0.9)',
            color: '#00ff88',
            border: '1px solid #444',
            borderRadius: '6px',
            padding: '5px 8px',
            fontSize: '13px',
            fontWeight: 'bold',
            outline: 'none',
            textAlign: 'center',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)'
          }}
        />
      </div>

      {/* Time Offset Counter */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'monospace',
        backgroundColor: 'rgba(10, 15, 25, 0.9)',
        border: '1px solid #334',
        padding: '5px 10px',
        borderRadius: '6px',
        color: '#00ff88',
        fontSize: '13px',
        fontWeight: 'bold',
        boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
        backdropFilter: 'blur(4px)'
      }}>
        <Clock size={14} />
        <span>{formatHours(currentTime)}</span>
      </div>
    </div>
  );
};

const btnStyle: React.CSSProperties = {
  backgroundColor: 'rgba(30, 40, 55, 0.85)',
  color: '#e0e0e0',
  border: '1px solid #445',
  borderRadius: '6px',
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(4px)',
  transition: 'all 0.15s ease'
};
