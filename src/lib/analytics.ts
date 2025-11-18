export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

// Predefined event functions
export const trackQuoteFormSubmit = () => {
  trackEvent('form_submit', {
    form_name: 'quote_request',
    form_location: 'homepage',
  });
};

export const trackClickToCall = () => {
  trackEvent('click_to_call', {
    location: 'header',
  });
};

export const trackServiceClick = (serviceName: string) => {
  trackEvent('service_click', {
    service_name: serviceName,
  });
};

export const trackFAQExpand = (question: string) => {
  trackEvent('faq_expand', {
    question_text: question,
  });
};
