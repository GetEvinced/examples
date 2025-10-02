import { test, expect } from "@playwright/test";
import { existsSync } from "node:fs";
import { EvincedSDK } from "@evinced/js-playwright-sdk";

test.describe("Evinced evAnalyze", () => {
  test("Single test run using evAnalyze", async ({ page }) => {
    const evReport = "./test-results/evAnalyze.html";
    const evincedService = new EvincedSDK(page);
    await page.goto("https://www.hl.co.uk/watchlists");
    await page.waitForTimeout(3000);
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
