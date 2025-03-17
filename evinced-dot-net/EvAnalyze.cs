using System;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using Evinced.SDK;

namespace EvincedCSharpTests
{
    [TestFixture]
    public class AccessibilityTests
    {
        [Test]
        public void EvAnalyzeTest()
        {
            EvincedConfig.Initialize();

            // Initialize Evinced WebDriver which wraps a ChromeDriver instance
            IEvincedDriver driver = EvincedDriverFactory.Create(new ChromeDriver());

            try
            {
                // Navigate to the site under test
                driver.Navigate().GoToUrl("https://www.google.com");

                // Run analysis and get the accessibility report
                IReport result = driver.EvAnalyze();

                // Assert that there are no accessibility issues
                NUnit.Framework.Assert.That(result.GetIssues(), Has.Count.EqualTo(0));
            }
            finally
            {
                driver.Quit();
            }
        }
    }
}
