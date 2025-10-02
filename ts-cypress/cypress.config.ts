import { defineConfig } from "cypress";
import Evinced from "@evinced/cypress-sdk";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      // This is how you should upload to platform with Cypress
      on("task", {
        uploadToPlatform: Evinced.cyTaskUploadToPlatform,
        evTask: Evinced.cyEvTask
      });
    },
  },
  env: {
    serviceId: process.env.EVINCED_SERVICE_ID,
    secret: process.env.EVINCED_API_KEY,
  },
});
