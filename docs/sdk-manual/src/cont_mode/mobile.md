# Continuous Mode - Mobile

Continuous Mode for mobile applications constantly scans from the start point when invoked. At the end point, when disabled, it returns a JSON and HTML Report containing accessibility issues found during the test session. 

Evinced uses screenshots as well as the view hierararchy at the time a tap, button press, or some other event occurs. Any accessibility issues found should go into the Issues list and then finally the Report when `reportStored()` or `report()` is called.

## Using Mobile Continuous Mode

### Android Espresso
Use `startAnalyze()` & `stopAnalyze()` to begin continuous accessibility monitoring:

```java
// Start continuous monitoring
evincedEngine.startAnalyze();
// Stop continuous monitoring
evincedEngine.stopAnalyze();
```

### iOS XCUITest
Use `EvincedEngine.startAnalyze()` and `stopAnalyze()`:

```swift
// Start continuous analysis
EvincedEngine.startAnalyze()
// Stop continuous analysis
EvincedEngine.stopAnalyze()
```

### Appium Java
Use the similar `startAnalyze()` and `stopAnalyze()` method to start watching the test:

```java
    evincedAppiumSdk.startAnalyze();
    evincedAppiumSdk.stopAnalyze();
```

## Generating Reports
By default HTML and JSON reports are produced whenver the reportStored method is called.

### Android Espresso
Use `reportStored()` method to generate reports from collected data:

```java
// Generate reports for all stored accessibility data
evincedEngine.reportStored();
```

### iOS XCUITest
Use `reportStored()` method to generate reports from collected data:

```swift
// Generate reports for all stored accessibility data
try EvincedEngine.reportStored(assert: false)
```

### Appium Java
Use `report()` method for immediate accessibility analysis:

```java
// Run analysis and get the accessibility report
Report report = evincedSdk.report();
```

The `reportStored()` method processes all accessibility data collected during the continuous scanning session and generates comprehensive reports.

{{#include ../snippets/official_docs.md}}