describe('Cases Page test', () => {
    it('should visit Cases page successfully', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.contains('Test Cases').click();
        cy.url().should('include', '/test_cases');
        cy.contains('Test Cases').should('be.visible');


        })
    })