import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { EvincedSDK } from "@evinced/js-playwright-sdk";
import { existsSync } from "node:fs";

const { Given, When, Then, Before, After } = createBdd();

let evinced;

Before(async ({ page }) => {
  evinced = new EvincedSDK(page);
  await evinced.evStart();
});

Given("I am on home page", async ({ page }) => {
  await page.goto("https://playwright.dev");
});

When("I click link {string}", async ({ page }, name) => {
  await page.getByRole("link", { name }).click();
});

Then("I see in title {string}", async ({ page }, keyword) => {
  await expect(page).toHaveTitle(new RegExp(keyword));
});

After(async () => {
  if (evinced) {
    const issues = await evinced.evStop();
    await evinced.evSaveFile(issues, "html", "./evinced-report.html");

    console.log(
      `Evinced report saved. Issues found: ${issues.length}. Report path: ./evinced-report.html`
    );
  }
});
