// Source: https://kellenfujimoto.com/posts/strongly-typed-google-analytics-events/
export interface IAnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}
