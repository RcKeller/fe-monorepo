/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Demo App', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/')
  })

  it('should save analytics events when our example button is clicked', () => {
    cy.window().its('dataLayer').its('0')
    .should('equal', [{
      action: "demo-impression",
      category: "impression"
    }])
    cy.get('button')
      .click()
      .wait(100)
    cy.window().its('dataLayer').its('1').should('contain', [{category: 'click', action: 'demo-click'}])
  })
})
