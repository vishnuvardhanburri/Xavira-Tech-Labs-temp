/**
 * Helper to push browser state and immediately dispatch a popstate event,
 * ensuring all SPA router elements remain perfectly synchronized.
 */
export const pushStateAndNotify = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};
