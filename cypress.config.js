const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://aloware.com",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    viewportWidth: 1280,
    viewportHeight: 800,
  }
});