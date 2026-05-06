const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://aloware.com",
    viewportWidth: 1280,
    viewportHeight: 800
  }
});