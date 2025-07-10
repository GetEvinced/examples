const { defineConfig } = require("cypress");
const Evinced = require("@evinced/cypress-sdk").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        uploadToPlatform: Evinced.cyTaskUploadToPlatform,
      });
    },
  },
  env: {
    serviceId: process.env.EVINCED_SERVICE_ID,
    secret: process.env.EVINCED_API_KEY,
  },
});
