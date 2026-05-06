# Aloware Cypress Automation

This project contains automated functional tests for the Aloware landing page using Cypress.

## Overview

The goal of this project is to validate key user flows on the landing page, focusing on navigation, visibility of important sections, and basic user interactions.

## Test Scenarios

The following scenarios are covered:

* Navigation to the pricing page
* Visibility of the testimonials section
* Navigation through the main CTA and browser back behavior

## Tech Stack

* Cypress
* JavaScript
* Page Object Model (POM)

## Project Structure

```
cypress/
  e2e/
    homepage.cy.js
    navigation.cy.js
  pages/
    homePage.js
  support/
    commands.js
    e2e.js
```

## Running the project

Install dependencies:

```
npm install
```

Open Cypress UI:

```
npm run cy:open
```

Run in headless mode:

```
npm run cy:run
```

## Notes

The tests were written with a focus on readability and maintainability.
Selectors were chosen to reflect real user interactions, avoiding forced actions whenever possible.

## Author

Gustavo Rodrigues
