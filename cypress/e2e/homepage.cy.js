import homePage from '../pages/homePage';

describe('Homepage', () => {

  it('should display testimonials section', () => {
    homePage.visit();

    homePage.scrollToTestimonials();

    cy.contains('Testimonials').should('be.visible');
  });

  it('should return to homepage after navigating to demo page', () => {
    homePage.visit();

    homePage.clickDemoButton();

    cy.url().should('include', '/get-demo');

    cy.go('back');

    cy.url().should('eq', 'https://aloware.com/');
  });

});