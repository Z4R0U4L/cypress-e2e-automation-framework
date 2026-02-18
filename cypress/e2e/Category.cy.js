describe('Category', () => {
    it('View Category Products', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('.left-sidebar').contains('Category').should('be.visible');
        cy.get('#accordian').should('be.visible');
        cy.get('.left-sidebar').contains('Women').click();
        cy.get('.left-sidebar').contains('Dress').click();
        cy.url().should('include', '/category_products/1');
        cy.contains('Women - Dress Products').should('be.visible');
        cy.get('.left-sidebar').contains('Men').click();
        cy.get('.left-sidebar').contains('Tshirts').click();
        cy.url().should('include', '/category_products/3');
        cy.contains('Men - Tshirts Products').should('be.visible');
    })
})

        