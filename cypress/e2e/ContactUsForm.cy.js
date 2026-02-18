describe('Contact Us Form test', () => {
    it('should submit the contact us form successfully', () => { 
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.contains('Contact us').click();
        cy.contains('Get In Touch').should('be.visible');
        cy.get('input[data-qa="name"]').type('Noureddine Test');
        cy.get('input[data-qa="email"]').type('noureddine@test.com');
        cy.get('input[data-qa="subject"]').type('Test Subject');
        cy.get('textarea[data-qa="message"]').type('This is a test message for the contact us form.');
        cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/test_img.jpg');
        cy.contains('Submit').click();
        cy.on('window:alert', (str) => {
           expect(str).to.equal('Press OK to proceed!');
        });
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
        cy.contains('Home').click();
        cy.url().should('eq', 'https://www.automationexercise.com/');
    });
})
