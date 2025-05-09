// Tipos para Google Analytics y Hotjar
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    hj: {
      (...args: any[]): void;
      q?: any[];
    };
    _hjSettings: {
      hjid: number;
      hjsv: number;
    };
  }
}

// Configuración de Google Analytics
export const initGoogleAnalytics = (id: string) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', id);
  }
};

// Configuración de Hotjar
export const initHotjar = (id: number) => {
  if (typeof window !== 'undefined') {
    window.hj = window.hj || function() {
      (window.hj.q = window.hj.q || []).push(arguments);
    };
    window._hjSettings = { hjid: id, hjsv: 6 };
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://static.hotjar.com/c/hotjar-${id}.js?sv=6`;
    document.head.appendChild(script);
  }
}; 