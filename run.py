#!/usr/bin/env python3
import os
import sys
import webbrowser
import uvicorn

def main():
    port = 8000
    host = "127.0.0.1"
    url = f"http://{host}:{port}"
    print("=" * 60)
    print("🚀 КосмоХакатон 2026: Проектирование Спутниковой Группировки")
    print(f"📡 Запуск веб-сервиса на: {url}")
    print("=" * 60)
    
    # Auto-open browser
    try:
        webbrowser.open(url)
    except Exception as e:
        print(f"Could not open browser automatically: {e}")
        
    uvicorn.run("backend.main:app", host=host, port=port, reload=False)

if __name__ == "__main__":
    main()
