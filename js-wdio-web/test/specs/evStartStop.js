import { expect, browser, $ } from "@wdio/globals";

describe("Using the Evinced WDIO SDK", () => {
  beforeEach(async () => {
    // Using the beforeEach and afterEach hook, we
    await browser.evStart();
    await browser.url("https://demo.evinced.com/");
  });

  afterEach(async () => {
    const issues = await browser.evStop();
    // Save issues to a report file, available in JSON, CSV, HTML
    // await browser.evSaveFile(issues, "json", "./test/issues.json");
    // await browser.evSaveFile(issues, "sarif", "./test/issues.sarif.json");
    // await browser.evSaveFile(issues, "csv", "./test/issues.csv");
    await browser.evSaveFile(issues, "html", "./test/hookIssues.html");
  });

  it("Use evStart and evStop without hooks", async () => {
    // Start scanning - the purpose of this is to track the changes, think of this as a recorder of sorts
    // It will record changes to the DOM from point A (start) to point B (stop)
    // and capture all DOM changes incl page navigation as test runs
    // good if clicking on drop downs, reveals more of the page

    const BASE_FORM_SELECTOR =
      "#gatsby-focus-wrapper > main > div.wrapper-banner > div.filter-container";
    const SELECT_HOME_DROPDOWN = `${BASE_FORM_SELECTOR} > div:nth-child(1) > div > div.dropdown.line > p`;
    const SELECT_WHERE_DROPDOWN = `${BASE_FORM_SELECTOR} > div:nth-child(2) > div > div.dropdown.line > p`;
    const TINY_HOME_OPTION = `#gatsby-focus-wrapper > main > div.wrapper-banner > div.filter-container > div:nth-child(1) > div > ul > li:nth-child(2)`;
    const EAST_COST_OPTION = `#gatsby-focus-wrapper > main > div.wrapper-banner > div.filter-container > div:nth-child(2) > div > ul > li:nth-child(1)`;
    const SUBMIT_BUTTON = `#gatsby-focus-wrapper > main > div.wrapper-banner > div.filter-container > a`;
    await $(SELECT_HOME_DROPDOWN).click();
    await $(TINY_HOME_OPTION).click();
    await $(SELECT_WHERE_DROPDOWN).click();
    await $(EAST_COST_OPTION).click();
    await $(SUBMIT_BUTTON).click();
    expect(browser).toHaveUrl(expect.stringContaining("/results"));
    // Add a command to stop recording and retrieve issues list
    console.log("ISSUES =", issues.length);
    // Note we know there are issues, but we want the test to pass
    expect(issues.length).toBeGreaterThan(0);
    // Save issues to a report file
    // await browser.evSaveFile(issues, "json", "./test/issues.json");
    // await browser.evSaveFile(issues, "sarif", "./test/issues.sarif.json");
    // await browser.evSaveFile(issues, "html", "./test/noHookIssues.html");
    // await browser.evSaveFile(issues, "csv", "./test/issues.csv");
  });
});
