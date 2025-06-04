/**
 * Analytics utility for tracking events
 */

interface Window {
  gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  hj?: (command: string, action: string, params?: Record<string, unknown>) => void;
}

/**
 * Track an event in analytics platforms
 * @param event The event name
 * @param data Optional event data
 */
export const track = (event: string, data?: Record<string, unknown>): void => {
  if (typeof window !== 'undefined') {
    // Track in Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('event', event, data);
    }
    
    // Track in Hotjar
    if ((window as any).hj) {
      (window as any).hj('event', event, data);
    }
  }
}; 