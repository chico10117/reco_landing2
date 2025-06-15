import { hasConsentFor } from '$lib/utils/cookies';
import { inject } from '@vercel/analytics';

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
  if (typeof window !== 'undefined' && hasConsentFor('analytics')) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', id, {
      // Enhanced privacy settings
      anonymize_ip: true,
      send_page_view: false, // We'll handle page views manually
    });
  }
};

// Configuración de Hotjar
export const initHotjar = (id: number) => {
  if (typeof window !== 'undefined' && hasConsentFor('analytics')) {
    // Initialize Hotjar function queue
    window.hj = window.hj || function() {
      (window.hj.q = window.hj.q || []).push(arguments);
    };
    window._hjSettings = { hjid: id, hjsv: 6 };
    
    // Load Hotjar script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://static.hotjar.com/c/hotjar-${id}.js?sv=6`;
    script.onerror = () => {
      console.warn('Failed to load Hotjar script');
    };
    document.head.appendChild(script);
  }
};

// Track if Vercel Analytics has been initialized
let vercelAnalyticsInitialized = false;

// Initialize all analytics platforms based on user consent
export const initAnalytics = () => {
  if (hasConsentFor('analytics') && isAnalyticsConfigured()) {
    const GA_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;
    const HOTJAR_ID = parseInt(import.meta.env.PUBLIC_HOTJAR_ID);
    
    if (GA_ID && GA_ID !== 'G-XXXXXXXXXX') {
      initGoogleAnalytics(GA_ID);
    }
    
    if (HOTJAR_ID && !isNaN(HOTJAR_ID) && HOTJAR_ID !== 1234567) {
      initHotjar(HOTJAR_ID);
    }
    
    // Initialize Vercel Analytics (only once and with consent)
    const vercelEnabled = import.meta.env.PUBLIC_VERCEL_ANALYTICS_ENABLED !== 'false';
    if (!vercelAnalyticsInitialized && vercelEnabled) {
      inject();
      vercelAnalyticsInitialized = true;
    }
  }
};

// Check if analytics is properly configured
export const isAnalyticsConfigured = (): boolean => {
  const analyticsEnabled = import.meta.env.PUBLIC_ANALYTICS_ENABLED !== 'false';
  const hasGaId = import.meta.env.PUBLIC_GA_MEASUREMENT_ID && 
                  import.meta.env.PUBLIC_GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX';
  const hasHotjarId = import.meta.env.PUBLIC_HOTJAR_ID && 
                      import.meta.env.PUBLIC_HOTJAR_ID !== '1234567';
  
  return analyticsEnabled && (!!hasGaId || !!hasHotjarId);
};

// Check if analytics are initialized
export const areAnalyticsInitialized = (): boolean => {
  return typeof window !== 'undefined' && 
         (!!window.gtag || !!window.hj || vercelAnalyticsInitialized) && 
         hasConsentFor('analytics');
};

// Get Vercel Analytics initialization status
export const isVercelAnalyticsInitialized = (): boolean => {
  return vercelAnalyticsInitialized;
};

// Debug function to check if Hotjar is properly loaded
export const isHotjarLoaded = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.hj === 'function' && 
         typeof window._hjSettings === 'object' &&
         window._hjSettings.hjid > 0;
};

// Debug function to get current analytics status
export const getAnalyticsStatus = () => {
  if (typeof window === 'undefined') {
    return { environment: 'server', analytics: 'not available' };
  }
  
  return {
    environment: 'client',
    consent: hasConsentFor('analytics'),
    configured: isAnalyticsConfigured(),
    initialized: areAnalyticsInitialized(),
    hotjar: {
      loaded: isHotjarLoaded(),
      id: window._hjSettings?.hjid || null,
    },
    googleAnalytics: {
      loaded: typeof window.gtag === 'function',
    },
    vercel: {
      initialized: vercelAnalyticsInitialized,
    }
  };
}; 