class HomePage {

  visit() {
    cy.visit('https://aloware.com/');
  }

  clickPricing() {
    cy.contains('a', 'Pricing')
      .should('be.visible')
      .click();
  }

  clickDemoButton() {
  cy.get('a[href*="demo"]')
    .filter(':visible')
    .first()
    .click();
}

  scrollToTestimonials() {
    cy.contains('Testimonials')
      .scrollIntoView();
  }

}

export default new HomePage();