describe('Subscription test', () => {
    it('should subscription be visible', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('#footer').contains('Subscription').should('be.visible');
        cy.get('#susbscribe_email').type('test@example.com');
        cy.get('#subscribe').click();
        cy.contains('You have been successfully subscribed!').should('be.visible');
    })
    it('should subscription be visible in cart page', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('#header').contains('Cart').click();
        cy.get('#footer').contains('Subscription').should('be.visible');
        cy.get('#susbscribe_email').type('test@example.com');
        cy.get('#subscribe').click();
        cy.contains('You have been successfully subscribed!').should('be.visible');
    })
})
