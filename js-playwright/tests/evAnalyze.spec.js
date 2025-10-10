import { test, expect } from "@playwright/test";
import { existsSync } from "node:fs";
import { EvincedSDK } from "@evinced/js-playwright-sdk";

test.describe("Evinced evAnalyze with login", () => {
  test("Single test run using evAnalyze after login", async ({ page }) => {
    const evReport = "./test-results/evAnalyze.html";
    const evincedService = new EvincedSDK(page);

    await page.goto("https://connectqalv.mheducation.com");

    // Fill in the login form
    await page.fill("#login-email", "evinced@mheqa.com");
    await page.fill("#login-password", "Connect123");

    // Click the login button (adjust the selector if needed)
    await page.click('button[type="submit"]');

    // Wait for navigation or a specific post-login element
    await page.waitForNavigation();

    await page.waitForTimeout(5000);
    // Run Evinced analysis
    const issues = await evincedService.evAnalyze({
      toggles: {
        USE_AXE_NEEDS_REVIEW: true,
        USE_AXE_BEST_PRACTICES: true,
      },
    });

    console.log("Issues =", issues);

    await evincedService.evSaveFile(issues, "html", evReport);
    expect(existsSync(evReport)).toBeTruthy();
  });
});
