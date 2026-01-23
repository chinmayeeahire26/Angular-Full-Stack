describe('Login Functionality', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('/login');
    cy.get('#username').type('validUser');
    cy.get('#password').type('validPassword');
    cy.get('#loginButton').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, validUser').should('be.visible');
  });
});