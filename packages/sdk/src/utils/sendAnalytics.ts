import { IAnalyticsEvent } from "../types/analytics";

export const saveAnalytics = (event: IAnalyticsEvent) => {
  if (typeof window === 'undefined') return undefined; // in case of SSR
  if (!window.dataLayer) window.dataLayer = [];
  console.log('saveAnalytics:', event)
  window.dataLayer.push(event)
  return undefined;
}
