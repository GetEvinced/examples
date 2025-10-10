import { test, expect } from '@playwright/test';
import { setCredentials } from '@Evinced Bot (Beta)/js-playwright-sdk';
import { EvincedSDK } from "@Evinced Bot (Beta)/js-playwright-sdk";
import { existsSync } from 'fs';
function decodeBase64(str: string): string {
  return Buffer.from(str, 'base64').toString('utf-8');
}
// Setup Evinced SDK credentials before tests
test.beforeAll(async () => {
  console.log('Setting up Evinced SDK credentials...');
  try {
    await setCredentials({
      serviceId: '67ecfa8f-3900-49a5-9f67-ffdb4795a0a6',
      secret: 'BTScsru7AYVGcgkjoUj9HKvYUNNgAPEx',
    });
    console.log('Evinced SDK credentials set successfully');
  } catch (error) {
    console.error('Evinced SDK authorization failure:', error);
    throw new Error('Evinced SDK authorization failure.');
  }
});
test('Login to UKG site using UKGLoginPage', async ({ page }) => {
  test.setTimeout(120000);
  const username = decodeBase64('');
  const password = decodeBase64('');
    const evReport = "/Users/nisha.pillai/GITHUB/EvincedReportPlaywright/evAnalyze.html";
    const jsonReport = "/Users/nisha.pillai/GITHUB/EvincedReportPlaywright/evAnalyze.json";
  console.log('Navigating to UKG login page...');
  const loginPage = new UKGLoginPage(page);
  await loginPage.navigate();
  console.log('Attempting to login...');
  try {
    await loginPage.login(username, password, 60000);
    console.log('Login successful');
  } catch (error: unknown) {
    console.error(`LOGIN FAILED: ${error instanceof Error ? error.message : 'Unknown error'}`);
    throw error;
  }
  console.log('Waiting for homepage to load...');
  const navigation = new UKGNavigation(page);
  await navigation.waitForPageLoad();
// Additional wait to ensure page is stable before accessibility scan
  console.log('Ensuring page is stable...');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForFunction(() => {
    return document.readyState === 'complete';
  });
  await page.waitForTimeout(3000); // Final wait
  console.log('Page ready for scanning');
  console.log('Running Evinced accessibility scan using evStart/evStop...');
  try {
    console.log(' Initializing Evinced SDK...');
    const evincedService = new EvincedSDK(page);
    console.log('Starting Evinced monitoring with evStart()...');
    await evincedService.evStart();
    console.log('evStart() completed successfully - monitoring active');
    console.log(' waiting for 3 sec.');
    await page.waitForTimeout(3000);
    console.log('Stopping Evinced monitoring with evStop()...');
    const issues = await evincedService.evStop();
    console.log('evStop() completed successfully');
    console.log(`Evinced found ${issues?.length || 0} accessibility issues`);
    console.log(' Saving Evinced reports...');
    await evincedService.evSaveFile(issues, "html", evReport);
    await evincedService.evSaveFile(issues, "json", jsonReport);
    console.log('Reports saved successfully');
    expect(existsSync(evReport)).toBeTruthy();
    console.log(' Evinced evStart/evStop scan completed successfully!');
  } catch (error: any) {
    console.error(' Evinced evStart/evStop scan failed:', error);
    console.error('Error details:', {
      name: error?.name || 'Unknown',
      message: error?.message || 'No message available',
      stack: error?.stack?.substring(0, 500) || 'No stack trace'
    });
    throw error;
  }
  });