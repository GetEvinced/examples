import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "sample.feature",
  steps: "steps.js",
});

export default defineConfig({
  globalSetup: require.resolve("./global.settings.js"),
  testDir,
  reporter: "html",
});
