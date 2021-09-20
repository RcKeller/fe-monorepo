/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /** custom function types here */
    shouldHaveAnalytics(index: number, event: any): void;
  }
}
