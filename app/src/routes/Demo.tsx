import * as React from 'react';

import { Button, useClientEffect } from '@rckeller/example-react-lib';
import { IAnalyticsEvent, saveAnalytics } from '@rckeller/example-sdk';

export const DemoRoute = () => {
  const impressionEvent: IAnalyticsEvent = {
    category: 'impression',
    action: 'demo-impression'
  }
  const clickEvent: IAnalyticsEvent = {
    category: 'click',
    action: 'demo-click'
  }
  useClientEffect(() => {
    saveAnalytics(impressionEvent)
  }, []);

  const handleClick = React.useCallback(() => {
    saveAnalytics(clickEvent)
  }, [])

  return (
    <article data-qa="Demo-Route">
      <Button as="button" onClick={handleClick}>Button from our React Component library!</Button>
    </article>
  )
}
