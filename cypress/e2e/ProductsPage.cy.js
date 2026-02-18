describe('Products Page test', () => {



    it('Verify All Products and product detail page', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.contains('Products').click();
        cy.url().should('include', '/products');
        cy.contains('All Products').should('be.visible');
        cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0);
        cy.contains('View Product').eq(0).click();
        cy.url().should('include', '/product_details/');
        cy.get('.product-information').within(() => {
            cy.get('h2').contains('Blue Top').should('be.visible');    //product name
            cy.get('p').contains('Category').should('be.visible');  //category
            cy.get('span').contains('Rs.').should('be.visible');   //price
            cy.get('p').contains('Availability').should('be.visible');   //availability
            cy.get('p').contains('Condition').should('be.visible');   //condition
            cy.get('p').contains('Brand').should('be.visible');  //brand

        });
    })

    it('Search Product', () => {
        cy.visit('https://www.automationexercise.com/products');
        cy.get('body').should('be.visible');
        cy.contains('Products').click();
        cy.url().should('include', '/products');
        cy.contains('All Products').should('be.visible');
        cy.get('#search_product').type('blue top');
        cy.get('#submit_search').click();
        cy.get('.features_items .col-sm-4').each(($el) => {
            cy.wrap($el).should('be.visible');
            cy.wrap($el).contains('blue top', { matchCase: false });
        });
    })

    it('View & Cart Brand Products', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('#header').contains('Products').click();
        cy.url().should('include', '/products');
        cy.get('.brands_products').should('be.visible');
        cy.get('.brands-name ul li a').contains('Polo').click();
        cy.url().should('include', 'brand_products/Polo');
        cy.contains('Brand - Polo Products').should('be.visible');
        cy.get('.brands-name ul li a').contains('Babyhug').click();
        cy.url().should('include', 'brand_products/Babyhug');
        cy.contains('Brand - Babyhug Products').should('be.visible');
        

    })

    const user = {
    name: 'Noureddine',
    email: `testuser${Date.now()}@mail.com`,
    password: 'zaroual123..',
    };
    before(() => {
    cy.RegisterUser(user);
    });
    it('Search Products and Verify Cart After Login', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('#header').contains('Products').click();
        cy.url().should('include', '/products');
        cy.get('#search_product').type('Blue');
        cy.get('#submit_search').click();
        cy.contains('Searched Products').should('be.visible');
        cy.get('.features_items .col-sm-4').each(($el) => {
            cy.wrap($el).should('be.visible');
            cy.wrap($el).contains('Blue', { matchCase: false });
        });
        cy.get('[data-product-id="1"]').first().click();
        cy.contains('Continue Shopping').click();
        cy.get('[data-product-id="21"]').first().click();
        cy.contains('Continue Shopping').click();
        cy.get('#header').contains('Cart').click();
        cy.url().should('include', '/view_cart');
        cy.get('.cart_info').should('be.visible');
        cy.get('.cart_info').contains('Blue Top').should('be.visible');
        cy.get('.cart_info').contains('Blue Cotton Indie Mickey Dress').should('be.visible');
        cy.get('#header').contains('Signup / Login').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('input[data-qa="login-email"]').type(user.email);
        cy.get('input[data-qa="login-password"]').type(user.password);
        cy.contains('[data-qa="login-button"]','Login').click();
        cy.contains('Logged in as').should('be.visible');
        cy.get('#header').contains('Cart').click();
        cy.url().should('include', '/view_cart');
        cy.get('.cart_info').should('be.visible');
        cy.get('.cart_info').contains('Blue Top').should('be.visible');
        cy.get('.cart_info').contains('Blue Cotton Indie Mickey Dress').should('be.visible');
        cy.contains('Delete Account').click();
        cy.contains('Account Deleted!').should('be.visible')
    })

    it.only('Add review on product', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('#header').contains('Products').click();
        cy.url().should('include', '/products');
        cy.contains('View Product').eq(0).click();
        cy.url().should('include', '/product_details/');
        cy.contains('Write Your Review').should('be.visible');
        cy.get('#name').type('Noureddine Test');
        cy.get('#email').type('testuser@example.com');
        cy.get('#review').type('This is a test review.');
        cy.get('#button-review').click();
        cy.contains('Thank you for your review.').should('be.visible');
    })
})