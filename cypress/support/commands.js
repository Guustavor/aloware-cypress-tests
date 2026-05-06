import homePage from '../pages/homePage';

Cypress.Commands.add('visitHomePage', () => {
  homePage.visit();
});