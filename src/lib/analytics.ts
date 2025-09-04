/**
 * Analytics utilities for tracking user interactions
 * Currently a placeholder for future analytics integration
 */

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any> | undefined;
  timestamp?: Date | undefined;
}

export interface PageViewEvent {
  path: string;
  title: string;
  referrer?: string | undefined;
  timestamp?: Date | undefined;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private pageViews: PageViewEvent[] = [];
  private isEnabled: boolean = true;

  /**
   * Initialize analytics (placeholder for future implementation)
   */
  init(config?: { apiKey?: string; debug?: boolean }) {
    if (config?.debug) {
      console.log('Analytics initialized', config);
    }
    this.isEnabled = true;
  }

  /**
   * Track a custom event
   */
  track(name: string, properties?: Record<string, any>) {
    if (!this.isEnabled) return;

    const event: AnalyticsEvent = {
      name,
      properties,
      timestamp: new Date()
    };

    this.events.push(event);
    
    // Log to console in development
    if (import.meta.env.MODE === 'development') {
      console.log('Analytics Event:', event);
    }

    // TODO: Send to analytics service
    // this.sendEvent(event);
  }

  /**
   * Track page view
   */
  page(path: string, title: string, referrer?: string) {
    if (!this.isEnabled) return;

    const pageView: PageViewEvent = {
      path,
      title,
      referrer,
      timestamp: new Date()
    };

    this.pageViews.push(pageView);

    // Log to console in development
    if (import.meta.env.MODE === 'development') {
      console.log('Analytics Page View:', pageView);
    }

    // TODO: Send to analytics service
    // this.sendPageView(pageView);
  }

  /**
   * Track form submissions
   */
  formSubmit(formName: string, formData?: Record<string, any>) {
    this.track('form_submit', {
      form_name: formName,
      ...formData
    });
  }

  /**
   * Track button clicks
   */
  buttonClick(buttonName: string, location?: string) {
    this.track('button_click', {
      button_name: buttonName,
      location
    });
  }

  /**
   * Track navigation events
   */
  navigate(from: string, to: string) {
    this.track('navigate', {
      from,
      to
    });
  }

  /**
   * Track demo requests
   */
  demoRequest(source?: string) {
    this.track('demo_request', {
      source
    });
  }

  /**
   * Track contact form submissions
   */
  contactSubmit(interestType?: string) {
    this.track('contact_submit', {
      interest_type: interestType
    });
  }

  /**
   * Track product page views
   */
  productView(productName: string) {
    this.track('product_view', {
      product_name: productName
    });
  }

  /**
   * Get all tracked events (for debugging)
   */
  getEvents() {
    return this.events;
  }

  /**
   * Get all page views (for debugging)
   */
  getPageViews() {
    return this.pageViews;
  }

  /**
   * Clear all stored events
   */
  clear() {
    this.events = [];
    this.pageViews = [];
  }

  /**
   * Disable analytics tracking
   */
  disable() {
    this.isEnabled = false;
  }

  /**
   * Enable analytics tracking
   */
  enable() {
    this.isEnabled = true;
  }

  // Private methods for future implementation
  private async _sendEvent(_event: AnalyticsEvent) {
    // TODO: Implement API call to analytics service
    // Example: await fetch('/api/analytics/event', { method: 'POST', body: JSON.stringify(event) });
  }

  private async _sendPageView(_pageView: PageViewEvent) {
    // TODO: Implement API call to analytics service
    // Example: await fetch('/api/analytics/pageview', { method: 'POST', body: JSON.stringify(pageView) });
  }
}

// Create singleton instance
export const analytics = new Analytics();

/**
 * React hook for analytics
 */
export function useAnalytics() {
  return {
    track: analytics.track.bind(analytics),
    page: analytics.page.bind(analytics),
    formSubmit: analytics.formSubmit.bind(analytics),
    buttonClick: analytics.buttonClick.bind(analytics),
    navigate: analytics.navigate.bind(analytics),
    demoRequest: analytics.demoRequest.bind(analytics),
    contactSubmit: analytics.contactSubmit.bind(analytics),
    productView: analytics.productView.bind(analytics)
  };
}