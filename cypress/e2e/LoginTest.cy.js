describe('Test Login with correct and incorrect credentials', () => {
  const user = {
    name: 'Noureddine',
    email: `testuser${Date.now()}@mail.com`,
    password: 'zaroual123..',
  };
  before(() => {
    cy.RegisterUser(user);
  });

  it('with correct email and password', () => {
    cy.visit('https://www.automationexercise.com');
    cy.get('body').should('be.visible');    
    cy.contains('Signup / Login').click();
    cy.contains('Login to your account').should('be.visible');
    cy.get('input[data-qa="login-email"]').type(user.email);
    cy.get('input[data-qa="login-password"]').type(user.password);
    cy.contains('[data-qa="login-button"]','Login').click();
    cy.contains('Logged in as').should('be.visible');
    cy.contains('Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible')
  })
  it('with incorrect email and password', () => {
    cy.visit('https://www.automationexercise.com');
    cy.get('body').should('be.visible');    
    cy.contains('Signup / Login').click();
    cy.contains('Login to your account').should('be.visible');
    cy.get('input[data-qa="login-email"]').type('incorrect@mail.com');
    cy.get('input[data-qa="login-password"]').type('wrongpassword');
    cy.contains('[data-qa="login-button"]','Login').click();
    cy.contains('Your email or password is incorrect!').should('be.visible');
  })

})