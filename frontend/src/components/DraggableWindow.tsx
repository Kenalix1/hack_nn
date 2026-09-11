import React, { useState, useRef, useEffect } from 'react';
import { Minus, Square, X, Move } from 'lucide-react';
import { WindowState } from '../types';

interface DraggableWindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  initialPos?: { x: number; y: number; width: number; height: number };
  zIndex: number;
  onFocus: () => void;
  children: React.ReactNode;
}

export const DraggableWindow: React.FC<DraggableWindowProps> = ({
  title,
  isOpen,
  onClose,
  initialPos = { x: 100, y: 60, width: 720, height: 480 },
  zIndex,
  onFocus,
  children
}) => {
  const getClampedPos = () => {
    const screenW = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const screenH = typeof window !== 'undefined' ? window.innerHeight : 800;
    const isMobile = screenW <= 768;

    const w = isMobile ? Math.min(screenW - 16, initialPos.width) : Math.min(screenW - 32, initialPos.width);
    const h = isMobile ? Math.min(screenH - 70, initialPos.height) : Math.min(screenH - 80, initialPos.height);
    const x = isMobile ? Math.max(8, (screenW - w) / 2) : Math.min(Math.max(8, initialPos.x), screenW - w - 8);
    const y = isMobile ? Math.max(50, (screenH - h) / 2) : Math.min(Math.max(50, initialPos.y), screenH - h - 8);

    return { x, y, width: w, height: h };
  };

  const [winState, setWinState] = useState<WindowState>(() => {
    const pos = getClampedPos();
    return {
      x: pos.x,
      y: pos.y,
      width: pos.width,
      height: pos.height,
      isMaximized: false,
      isMinimized: false,
      zIndex
    };
  });

  const isDraggingRef = useRef(false);
  const isResizingRef = useRef(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const resizeStartRef = useRef({ w: 0, h: 0, x: 0, y: 0 });

  useEffect(() => {
    setWinState(prev => ({ ...prev, zIndex }));
  }, [zIndex]);

  useEffect(() => {
    const handleResize = () => {
      setWinState(prev => {
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const newW = Math.min(prev.width, screenW - 16);
        const newH = Math.min(prev.height, screenH - 60);
        const newX = Math.min(Math.max(4, prev.x), Math.max(4, screenW - newW - 4));
        const newY = Math.min(Math.max(48, prev.y), Math.max(48, screenH - newH - 4));
        return { ...prev, x: newX, y: newY, width: newW, height: newH };
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isOpen) return null;

  // Handle Mouse / Touch Dragging
  const startDrag = (clientX: number, clientY: number) => {
    onFocus();
    if (winState.isMaximized) return;
    isDraggingRef.current = true;
    dragOffsetRef.current = {
      x: clientX - winState.x,
      y: clientY - winState.y
    };

    const handleMove = (evX: number, evY: number) => {
      if (!isDraggingRef.current) return;
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const nextX = Math.min(Math.max(4, evX - dragOffsetRef.current.x), screenW - winState.width - 4);
      const nextY = Math.min(Math.max(48, evY - dragOffsetRef.current.y), screenH - winState.height - 4);
      setWinState(prev => ({ ...prev, x: nextX, y: nextY }));
    };

    const onMouseMove = (ev: MouseEvent) => handleMove(ev.clientX, ev.clientY);
    const onTouchMove = (ev: TouchEvent) => {
      if (ev.touches[0]) handleMove(ev.touches[0].clientX, ev.touches[0].clientY);
    };

    const stopDrag = () => {
      isDraggingRef.current = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDrag);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', stopDrag);
  };

  const handleHeaderMouseDown = (e: React.MouseEvent) => startDrag(e.clientX, e.clientY);
  const handleHeaderTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) startDrag(e.touches[0].clientX, e.touches[0].clientY);
  };

  // Handle Resizing
  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFocus();
    if (winState.isMaximized) return;
    isResizingRef.current = true;
    resizeStartRef.current = {
      w: winState.width,
      h: winState.height,
      x: e.clientX,
      y: e.clientY
    };

    const handleMouseMove = (ev: MouseEvent) => {
      if (!isResizingRef.current) return;
      const dw = ev.clientX - resizeStartRef.current.x;
      const dh = ev.clientY - resizeStartRef.current.y;
      setWinState(prev => ({
        ...prev,
        width: Math.max(380, resizeStartRef.current.w + dw),
        height: Math.max(240, resizeStartRef.current.h + dh)
      }));
    };

    const handleMouseUp = () => {
      isResizingRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const toggleMaximize = () => {
    setWinState(prev => ({ ...prev, isMaximized: !prev.isMaximized }));
  };

  const style: React.CSSProperties = winState.isMaximized ? {
    position: 'fixed',
    top: '44px',
    left: 0,
    width: '100vw',
    height: 'calc(100vh - 44px)',
    zIndex,
    backgroundColor: '#262626',
    border: '1px solid #383838',
    display: winState.isMinimized ? 'none' : 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 32px rgba(0,0,0,0.6)'
  } : {
    position: 'fixed',
    left: `${winState.x}px`,
    top: `${winState.y}px`,
    width: `${winState.width}px`,
    height: `${winState.height}px`,
    zIndex,
    backgroundColor: '#262626',
    border: '1px solid #383838',
    borderRadius: '6px',
    display: winState.isMinimized ? 'none' : 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
    overflow: 'hidden'
  };

  return (
    <div style={style} onClick={onFocus}>
      {/* Window Header / Drag Handle */}
      <div
        onMouseDown={handleHeaderMouseDown}
        onTouchStart={handleHeaderTouchStart}
        style={{
          height: '36px',
          backgroundColor: '#1f1f1f',
          borderBottom: '1px solid #383838',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 12px',
          cursor: winState.isMaximized ? 'default' : 'move',
          userSelect: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '13px', color: '#e0e0e0' }}>
          <Move size={14} style={{ color: '#888' }} />
          <span>{title}</span>
        </div>

        {/* Window Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button
            onClick={(e) => { e.stopPropagation(); setWinState(prev => ({ ...prev, isMinimized: !prev.isMinimized })); }}
            style={actionButtonStyle}
            title="Свернуть"
          >
            <Minus size={12} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); toggleMaximize(); }}
            style={actionButtonStyle}
            title={winState.isMaximized ? "Восстановить" : "Развернуть"}
          >
            <Square size={12} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            style={actionButtonStyle}
            title="Закрыть"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        position: 'relative',
        backgroundColor: '#262626',
        color: '#e0e0e0'
      }}>
        {children}
      </div>

      {/* Resize Handle */}
      {!winState.isMaximized && (
        <div
          onMouseDown={handleResizeMouseDown}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '16px',
            height: '16px',
            cursor: 'nwse-resize',
            zIndex: 10,
            background: 'linear-gradient(135deg, transparent 50%, #4a4a4a 50%)'
          }}
        />
      )}
    </div>
  );
};

const actionButtonStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: '#a0a0a0',
  border: 'none',
  borderRadius: '3px',
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
};
