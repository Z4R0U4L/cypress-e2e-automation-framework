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



Cypress.Commands.add('RegisterUser', (user) => {
    cy.visit('https://www.automationexercise.com');
    cy.get('body').should('be.visible');
    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible');
    cy.get('input[data-qa="signup-name"]').type(user.name);
    cy.get('input[data-qa="signup-email"]').type(user.email);
    cy.contains('[data-qa="signup-button"]','Signup').click();
    cy.contains('Enter Account Information').should('be.visible');
    cy.get('#id_gender1').check();
    cy.get('#password').type(user.password);
    cy.get('#days').select('14');
    cy.get('#months').select('December');
    cy.get('#years').select('2002');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('input[data-qa="first_name"]').type('Noureddine');
    cy.get('input[data-qa="last_name"]').type('Zaroual');
    cy.get('input[data-qa="company"]').type('domain');
    cy.get('input[data-qa="address"]').type('Rabat aakari rue erragragi ');
    cy.get('input[data-qa="address2"]').type('Rabat en face avenue hassan II');
    cy.get('#country').select('Canada');
    cy.get('input[data-qa="state"]').type('vancouver');
    cy.get('input[data-qa="city"]').type('toronto');
    cy.get('input[data-qa="zipcode"]').type('A1A 1A1');
    cy.get('input[data-qa="mobile_number"]').type('+2126214155');
    cy.contains('Create Account').click();
    cy.contains('Account Created!').should('be.visible');
    cy.contains('Continue').click();
    cy.contains('Logged in as').should('be.visible');
    cy.contains('Logout').click();
     })
Cypress.Commands.add('Login', (user) => {
    cy.visit('https://www.automationexercise.com');
    cy.get('body').should('be.visible');    
    cy.contains('Signup / Login').click();
    cy.contains('Login to your account').should('be.visible');
    cy.get('input[data-qa="login-email"]').type(user.email);
    cy.get('input[data-qa="login-password"]').type(user.password);
    cy.contains('[data-qa="login-button"]','Login').click();
    cy.contains('Logged in as').should('be.visible');
    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })