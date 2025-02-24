import { Builder } from "selenium-webdriver";
import assert from "assert";
import pkg from "@evinced/js-selenium-sdk";
const { EvincedSDK, setCredentials } = pkg;

await setCredentials({
  serviceId: process.env.EVINCED_SERVICE_ID,
  secret: process.env.EVINCED_API_KEY,
});

describe("Demo page", async () => {
  let driver;

  // this.timeout(10000);

  it("Demo page. evAnalyze", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    const evincedService = new EvincedSDK(driver);
    await driver.get("https://demo.evinced.com/");
    const issues = await evincedService.evAnalyze();
    assert.equal(issues.length, 6);
    await driver.quit();
  });
});
