package com.krissutherland;

import static org.junit.Assert.assertTrue;

import com.evinced.common.impl.configuration.LoggingConfiguration;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import com.evinced.dto.configuration.EvincedConfiguration;
import com.evinced.dto.results.Report;
import io.github.bonigarcia.wdm.WebDriverManager;
import com.evinced.EvincedWebDriver;
import com.evinced.EvincedReporter;
import com.evinced.EvincedSDK;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.io.File;
import java.net.MalformedURLException;
import java.text.SimpleDateFormat;

public class EvincedSetupTest
{
    ChromeDriver driver;
    EvincedWebDriver evincedDriver;

    @Before
    public void setupAll() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        EvincedSDK.setOfflineCredentials(System.getenv("EVINCED_SERVICE_ID"), System.getenv("EVINCED_AUTH_TOKEN"));
    }

    @After
    public void teardownDrivers() {
        if (driver != null) {
            driver.quit();
        }
        if (evincedDriver != null) {
            evincedDriver.quit();
        }
    }

    // test for https://developer.evinced.com/sdks-for-web-apps/selenium-java-sdk#addevincedaccessibilitychecks(singlerunmode)
    @Test
    public void ShouldStartChrome() throws MalformedURLException {
       
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss Z");
        String targetLogsFolder = "target/logs/evinced/debug_logs_" + dateFormat.format(new java.util.Date());
  
        EvincedConfiguration evincedConfiguration = new EvincedConfiguration();
        evincedConfiguration.setLoggingConfiguration(LoggingConfiguration.builder()
            .loggingEnabled(false)
            .loggingLevel("debug")
            .logsFolder(targetLogsFolder)
            .systemInformationLoggingEnabled(true)
            .build());
        EvincedWebDriver evincedDriver = new EvincedWebDriver(driver, evincedConfiguration);

        evincedDriver.get("https://demo.evinced.com");
        Report report = evincedDriver.evAnalyze();
        // Assert that there are SOME accessibility issues
        assertTrue(report.getIssues().size() != 0);
    }

    @Test
    public void SaveReports() throws MalformedURLException {
        try {
            EvincedConfiguration configuration = new EvincedConfiguration();
            configuration.setEnableScreenshots(true);
            EvincedWebDriver evincedDriver = new EvincedWebDriver(driver, configuration);
            EvincedSDK.setOfflineCredentials(System.getenv("EVINCED_SERVICE_ID"), System.getenv("EVINCED_AUTH_TOKEN"));
            
            evincedDriver.get("https://demo.evinced.com");
            
            Report landing_page_report = evincedDriver.evAnalyze();
            
            //Saves issues in a file with the specified format and location. 
            //Supported formats - json, html, sarif, and csv.
            EvincedReporter.evSaveFile("landing_page",landing_page_report, EvincedReporter.FileFormat.HTML);
            assertTrue(landing_page_report.getIssues().size() != 0);

            evincedDriver.get("https://demo.evinced.com/results/?what=Tiny%20House&where=Canada&date=Tue%20Jul%2009%202024%2011:21:39%20GMT-0400%20(Eastern%20Daylight%20Time");
            takeSnapshot("results_page", evincedDriver);

        } catch (Exception ignore) {
            // ignore exception
            System.out.println(ignore);
        }
    }

    public static void takeSnapshot(String reportName, EvincedWebDriver evDriver) {
        /* use your local driver class instead and configure it 
         here if you need to call evAnalyze sporadically */
        // EvincedConfiguration evConfiguration = new EvincedConfiguration();
        // evConfiguration.setEnableScreenshots(true);
        // EvincedWebDriver evincedDriver = new EvincedWebDriver(localDriverInstance, evConfiguration);
        if (Boolean.getBoolean("RUN_EVINCED") != true) {
            return;
        }
        Report report = evDriver.evAnalyze();
        EvincedReporter.evSaveFile(reportName, report, EvincedReporter.FileFormat.HTML);
    }

}