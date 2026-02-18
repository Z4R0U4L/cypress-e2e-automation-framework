describe('Cart Test', () => {
    it('add prodcuts to cart', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('#header').contains('Products').click();
        cy.get('[data-product-id="1"]').first().click();
        cy.contains('Continue Shopping').click();
        cy.get('[data-product-id="2"]').first().click();
        cy.contains('View Cart').click();
        cy.get('.cart_info').should('be.visible');
        cy.get('.cart_info').contains('Blue Top').should('be.visible');
        cy.get('.cart_info').contains('Men Tshirt').should('be.visible');
        cy.get('.cart_info tbody tr').each(($row) => {
            cy.wrap($row).find('.cart_price').should('be.visible')
            cy.wrap($row).find('.cart_quantity').should('contain', '1')
            cy.wrap($row).find('.cart_total').should('be.visible')
        })
        

    })
    it('add prodcuts to cart', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('#header').contains('Products').click();
        cy.contains('View Product').first().click()
        cy.get('.product-information').should('be.visible');
        cy.get('#quantity').clear().type('4');
        cy.contains('Add to cart').click()
        cy.contains('View Cart').click()
        cy.get('.cart_info tbody tr').first().find('.cart_quantity').should('contain', '4');

    })
    it('remove product from cart', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('[data-product-id="1"]').first().click();
        cy.contains('Continue Shopping').click();
        cy.get('[data-product-id="2"]').first().click();
        cy.contains('Continue Shopping').click();
        cy.get('#header').contains('Cart').click();
        cy.url().should('include', '/view_cart');
        cy.get('tbody tr').should('have.length', 2);
        cy.get('.cart_delete a').first().click();
        cy.get('tbody tr').should('have.length', 1);
        })
    it.only('Add to cart from Recommended items', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.scrollTo('bottom');
        cy.get('#recommended-item-carousel').should('be.visible');
        cy.get('[data-product-id="1"]').first().click();
        cy.contains('View Cart').click();
        cy.get('.cart_info').should('be.visible');
        cy.get('.cart_info').contains('Blue Top').should('be.visible');
    })




       
})