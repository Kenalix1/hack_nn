import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Clock, Sliders } from 'lucide-react';

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
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        onChangeTime(prev => {
          const next = prev + stepSeconds * speedMultiplier;
          return next >= maxTime ? 0 : next;
        });
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isPlaying, stepSeconds, speedMultiplier, maxTime, onChangeTime]);

  const formatHours = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `+${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '680px',
      backgroundColor: '#1f1f1f',
      border: '1px solid #383838',
      borderRadius: '8px',
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
      zIndex: 85,
      color: '#e0e0e0',
      fontSize: '12px'
    }}>
      {/* Playback Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <button
          onClick={() => onChangeTime(prev => Math.max(0, prev - stepSeconds))}
          style={btnStyle}
          title="Шаг назад"
        >
          <SkipBack size={14} />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            ...btnStyle,
            backgroundColor: isPlaying ? '#ff3b30' : '#1473e6',
            color: '#fff',
            border: 'none'
          }}
          title={isPlaying ? 'Пауза' : 'Воспроизведение'}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>

        <button
          onClick={() => onChangeTime(prev => Math.min(maxTime, prev + stepSeconds))}
          style={btnStyle}
          title="Шаг вперед"
        >
          <SkipForward size={14} />
        </button>
      </div>

      {/* Interactive Time Slider */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <input
          type="range"
          min="0"
          max={maxTime}
          step={stepSeconds}
          value={currentTime}
          onChange={(e) => {
            const val = parseInt(e.target.value);
            onChangeTime(() => val);
          }}
          style={{
            width: '100%',
            accentColor: '#1473e6',
            cursor: 'pointer'
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#888' }}>
          <span>T=0с</span>
          <span>{Math.round((currentTime / maxTime) * 100)}%</span>
          <span>T=24ч</span>
        </div>
      </div>

      {/* Step dt Selector Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <span style={{ fontSize: '11px', color: '#888' }}>dt:</span>
        {[1, 10, 60, 300].map(s => (
          <button
            key={s}
            onClick={() => onChangeStep(s)}
            style={{
              padding: '2px 6px',
              borderRadius: '3px',
              fontSize: '10px',
              border: '1px solid #444',
              backgroundColor: stepSeconds === s ? '#1473e6' : '#141414',
              color: stepSeconds === s ? '#fff' : '#aaa',
              cursor: 'pointer'
            }}
          >
            {s >= 60 ? `${s / 60}м` : `${s}с`}
          </button>
        ))}
      </div>

      {/* Time Offset Counter */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'monospace',
        backgroundColor: '#141414',
        border: '1px solid #333',
        padding: '4px 8px',
        borderRadius: '4px',
        color: '#00ff88'
      }}>
        <Clock size={12} />
        <span>{formatHours(currentTime)}</span>
      </div>

      {/* Speed Multiplier Select */}
      <select
        value={speedMultiplier}
        onChange={(e) => setSpeedMultiplier(parseInt(e.target.value))}
        style={{
          backgroundColor: '#141414',
          color: '#ccc',
          border: '1px solid #333',
          borderRadius: '4px',
          padding: '4px 6px',
          fontSize: '11px',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        <option value={1}>1x</option>
        <option value={5}>5x</option>
        <option value={10}>10x</option>
        <option value={60}>60x</option>
        <option value={300}>300x</option>
      </select>
    </div>
  );
};

const btnStyle: React.CSSProperties = {
  backgroundColor: '#2a2a2a',
  color: '#d0d0d0',
  border: '1px solid #3a3a3a',
  borderRadius: '4px',
  width: '28px',
  height: '28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
};
