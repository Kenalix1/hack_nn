import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught UI error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  private handleReset = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (e) {}
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0c101a',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{
            maxWidth: '640px',
            backgroundColor: '#161d28',
            border: '1px solid #ef4444',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
          }}>
            <h2 style={{ color: '#f87171', margin: '0 0 12px 0', fontSize: '18px' }}>
              ⚠️ Обнаружена ошибка отображения интерфейса
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.5, margin: '0 0 16px 0' }}>
              В браузере возникло исключение при рендере компонентов или загрузке кэшированного состояния:
            </p>
            <pre style={{
              backgroundColor: '#070a10',
              border: '1px solid #334155',
              padding: '12px',
              borderRadius: '6px',
              color: '#fca5a5',
              fontSize: '11px',
              overflowX: 'auto',
              maxHeight: '220px',
              whiteSpace: 'pre-wrap',
              margin: '0 0 20px 0'
            }}>
              {this.state.error?.stack || this.state.error?.toString()}
              {this.state.errorInfo?.componentStack ? `\n\nComponent Stack:\n${this.state.errorInfo.componentStack}` : ''}
            </pre>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={this.handleReset}
                style={{
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 18px',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Сбросить кэш и перезагрузить
              </button>
              <button
                onClick={() => {
                  const text = (this.state.error?.stack || this.state.error?.toString() || '') + '\n' + (this.state.errorInfo?.componentStack || '');
                  navigator.clipboard.writeText(text);
                  alert('Текст ошибки скопирован в буфер обмена');
                }}
                style={{
                  backgroundColor: '#334155',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 18px',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Скопировать ошибку
              </button>
              <button
                onClick={() => window.location.reload()}
                style={{
                  backgroundColor: '#1e293b',
                  color: '#cbd5e1',
                  border: '1px solid #475569',
                  borderRadius: '6px',
                  padding: '10px 18px',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Повторить загрузку
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
