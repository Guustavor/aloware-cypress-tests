import homePage from '../pages/homePage';

describe('Navigation', () => {

  it('should navigate to pricing page', () => {
    homePage.visit();

    homePage.clickPricing();

    cy.url().should('include', '/pricing');
    cy.contains('Pricing').should('be.visible');
  });

});