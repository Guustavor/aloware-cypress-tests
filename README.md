# Aloware QA Automation Project

## Objective
This project contains automated functional tests for the Aloware landing page using Cypress.

## Test Scenarios
The following scenarios are covered:

Navigation to the pricing page
Visibility of the testimonials section
Navigation through the main CTA and browser back behavior

## Tech Stack
Cypress
JavaScript
Page Object Model (POM)

## Project Structure
cypress/
├── e2e/
├── fixtures/
├── pages/
├── reports/
├── screenshots/
└── support/

## Installation
npm install

## Run Cypress UI
npx cypress open

## Run Headless
npx cypress run

## Reporting
Reports are generated under:
cypress/reports

## Notes

The tests were written with a focus on readability and maintainability.
Selectors were chosen to reflect real user interactions, avoiding forced actions whenever possible.

Author

Gustavo Rodrigues