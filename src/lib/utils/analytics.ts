/**
 * Analytics utility for tracking events
 */

import { hasConsentFor } from './cookies';

/**
 * Track an event in analytics platforms
 * Only tracks if user has given consent for analytics cookies
 * @param event The event name
 * @param data Optional event data
 */
export const track = (event: string, data?: Record<string, unknown>): void => {
  if (typeof window !== 'undefined' && hasConsentFor('analytics')) {
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

/**
 * Track a page view in analytics platforms
 * Only tracks if user has given consent for analytics cookies
 * @param url The page URL
 * @param title Optional page title
 */
export const trackPageView = (url: string, title?: string): void => {
  if (typeof window !== 'undefined' && hasConsentFor('analytics')) {
    // Track in Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: url,
        page_title: title,
      });
    }
  }
};

/**
 * Check if analytics tracking is enabled
 * @returns boolean indicating if analytics tracking is allowed
 */
export const isAnalyticsEnabled = (): boolean => {
  return hasConsentFor('analytics');
}; 