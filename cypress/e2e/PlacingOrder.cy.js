describe('Cart Test', () => {
    const user = {
    name: 'Noureddine',
    email: `testuser${Date.now()}@mail.com`,
    password: 'zaroual123..',
    };
    it(' Place Order: Register while Checkout', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('#header').contains('Products').click();
        cy.get('[data-product-id="1"]').first().click();
        cy.contains('Continue Shopping').click();
        cy.get('[data-product-id="2"]').first().click();
        cy.contains('Continue Shopping').click();
        cy.get('#header').contains('Cart').click();
        cy.url().should('include', '/view_cart');
        cy.contains('Proceed To Checkout').click();
        cy.get('#checkoutModal u').contains('Register / Login').click();
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
        cy.get('#header').contains('Cart').click();
        cy.contains('Proceed To Checkout').click();
        cy.contains('Address Details').should('be.visible')
        cy.contains('Review Your Order').should('be.visible')
        cy.get('textarea[name="message"]').type('Please deliver fast')
        cy.contains('Place Order').click()
        cy.get('input[name="name_on_card"]').type('Test Zaroual');
        cy.get('input[name="card_number"]').type('4111111111111111');
        cy.get('input[name="cvc"]').type('123');
        cy.get('input[name="expiry_month"]').type('12');
        cy.get('input[name="expiry_year"]').type('2025');
        cy.get('[data-qa="pay-button"]').click()
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
        cy.contains('Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.contains('Continue').click()
    })
    it('Place Order: Register before Checkout', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('#header').contains('Signup / Login').click();
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
        cy.get('#header').contains('Products').click();
        cy.get('[data-product-id="1"]').first().click();
        cy.contains('Continue Shopping').click();
        cy.get('[data-product-id="2"]').first().click();
        cy.contains('Continue Shopping').click();
        cy.get('#header').contains('Cart').click();
        cy.url().should('include', '/view_cart');
        cy.contains('Proceed To Checkout').click();
        cy.contains('Address Details').should('be.visible')
        cy.contains('Review Your Order').should('be.visible')
        cy.get('textarea[name="message"]').type('Please deliver fast')
        cy.contains('Place Order').click()
        cy.get('input[name="name_on_card"]').type('Test Zaroual');
        cy.get('input[name="card_number"]').type('4111111111111111');
        cy.get('input[name="cvc"]').type('123');
        cy.get('input[name="expiry_month"]').type('12');
        cy.get('input[name="expiry_year"]').type('2025');
        cy.get('[data-qa="pay-button"]').click()
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
        cy.contains('Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.contains('Continue').click()
    })

    before(() => {
    cy.RegisterUser(user);
  });

    it.only(' Place Order: Login before Checkout', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get('#header').contains('Signup / Login').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('input[data-qa="login-email"]').type(user.email);
        cy.get('input[data-qa="login-password"]').type(user.password);
        cy.contains('[data-qa="login-button"]','Login').click();
        cy.get('#header').contains('Products').click();
        cy.get('[data-product-id="1"]').first().click();
        cy.contains('Continue Shopping').click();
        cy.get('[data-product-id="2"]').first().click();
        cy.contains('Continue Shopping').click();
        cy.get('#header').contains('Cart').click();
        cy.url().should('include', '/view_cart');
        cy.contains('Proceed To Checkout').click();
        cy.contains('Address Details').should('be.visible')
        cy.contains('Review Your Order').should('be.visible')
        cy.get('textarea[name="message"]').type('Please deliver fast')
        cy.contains('Place Order').click()
        cy.get('input[name="name_on_card"]').type('Test Zaroual');
        cy.get('input[name="card_number"]').type('4111111111111111');
        cy.get('input[name="cvc"]').type('123');
        cy.get('input[name="expiry_month"]').type('12');
        cy.get('input[name="expiry_year"]').type('2025');
        cy.get('[data-qa="pay-button"]').click()
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
        cy.contains('Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.contains('Continue').click()
        })
        
            



})