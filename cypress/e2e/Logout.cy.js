describe('Logout test', () => {
    const user = {
    name: 'Noureddine',
    email: `testuser${Date.now()}@mail.com`,
    password: 'zaroual123..',
  };
  before(() => {
    cy.RegisterUser(user);
  });
    it('should logout successfully', () => {
        cy.Login(user);
        cy.contains('Logout').click();
        cy.contains('Signup / Login').should('be.visible');
        cy.url().should('include', '/login');
    })

  })
