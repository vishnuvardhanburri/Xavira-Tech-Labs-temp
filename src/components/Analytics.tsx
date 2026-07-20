import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    clarity?: (...args: any[]) => void;
  }
}

// Environment variables
const GA4_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

/**
 * Analytics tracking component.
 * Integrates Google Analytics 4 and Microsoft Clarity dynamically.
 */
export default function Analytics() {
  const location = useLocation();

  // 1. Initialize Analytics Scripts on Mount
  useEffect(() => {
    // A. GA4 Initialization
    if (GA4_ID && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer?.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA4_ID, {
        send_page_view: false, // Managed manually on location changes
      });
      console.log('[Analytics] GA4 initialized with ID:', GA4_ID);
    }

    // B. Microsoft Clarity Initialization
    if (CLARITY_ID && !window.clarity) {
      (function(c,l,a,r,i,t,y){
        // @ts-ignore
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        // @ts-ignore
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        // @ts-ignore
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", CLARITY_ID);
      console.log('[Analytics] Microsoft Clarity initialized with ID:', CLARITY_ID);
    }

    // C. Global Click Tracker for CTA & Outbound Links
    const handleGlobalClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      const button = target.closest('button');

      if (anchor) {
        const href = anchor.getAttribute('href') || '';
        const text = anchor.textContent?.trim() || '';

        // Outbound link tracking
        if (href.startsWith('http') && !href.includes(window.location.hostname)) {
          trackEvent('outbound_click', { url: href, text });
        }
        
        // Download tracking
        if (href.match(/\.(pdf|zip|epub|csv|xlsx)$/i)) {
          trackEvent('file_download', { file_path: href, file_name: text });
        }

        // CTA link tracking
        if (anchor.classList.contains('cta') || anchor.id?.includes('cta')) {
          trackEvent('cta_click', { cta_id: anchor.id || href, cta_text: text });
        }
      }

      if (button) {
        const text = button.textContent?.trim() || '';
        const id = button.id || '';
        
        // Track typical buttons with high-importance tracking class or ID
        if (id.includes('cta') || button.classList.contains('cta') || id.includes('book') || id.includes('submit')) {
          trackEvent('cta_click', { cta_id: id || 'button', cta_text: text });
        }
      }
    };

    // D. Global Scroll Depth Tracker (25%, 50%, 75%, 100%)
    const thresholds = new Set([25, 50, 75, 100]);
    const trackedThresholds = new Set<number>();
    
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      
      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);
      
      for (const t of thresholds) {
        if (scrollPercent >= t && !trackedThresholds.has(t)) {
          trackedThresholds.add(t);
          trackEvent('scroll_depth', { depth: t });
        }
      }
    };

    document.addEventListener('click', handleGlobalClicks);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleGlobalClicks);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 2. Track Page Views on Location (Route) Change
  useEffect(() => {
    // Send GA4 Page View
    if (window.gtag && GA4_ID) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }

    // Special event for research profiles
    if (location.pathname.startsWith('/research/')) {
      const companySlug = location.pathname.replace('/research/', '');
      trackEvent('research_view', { company_slug: companySlug });
    }

    // Special event for 404 Pages (handled in route logic if page title contains "404")
    setTimeout(() => {
      if (document.title.includes('404') || document.body.textContent?.includes('404: NOT_FOUND')) {
        trackEvent('error_404', { path: location.pathname });
      }
    }, 500);

  }, [location.pathname, location.search]);

  return null;
}

/**
 * Event utility to track custom user interactions.
 */
export function trackEvent(eventName: string, params: object = {}) {
  if (window.gtag && GA4_ID) {
    window.gtag('event', eventName, params);
  }
  if (window.clarity) {
    window.clarity('event', eventName);
  }
}
