import { IAnalyticsEvent } from "../types/analytics";

/** Saves an event to our analytics system, like google analytics */
export const saveAnalytics = (event: IAnalyticsEvent) => {
  // handle SSR gracefully
  if (typeof window === 'undefined') {
    if (__DEV__) {
      console.warn('sendAnalytics: analytics tracking is not supported during server side rendering')
    }
    return undefined;
  }
  // handle cases where analytics has not been initialized
  if (!window.dataLayer) {
    if (__DEV__) {
      console.warn('sendAnalytics: could not find data tracking layer, did you initialize @rckeller/example-script?')
    }
    return undefined;
  }

  // push the actual analytics event
  window.dataLayer.push(event)

  return undefined;
}
