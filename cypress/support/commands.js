// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist')
})
Cypress.Commands.add('login', (username, password) => {
    cy.get('#LoginForm_username').clear()
    cy.get('#LoginForm_username').type(username)
    cy.get('#LoginForm_password').clear()
    cy.get('#LoginForm_password').type(password)
    cy.get('#LoginForm_rememberMe').check()
    cy.get('#LoginForm_rememberMe').should('be.checked')
    cy.contains('Login').click()
})
