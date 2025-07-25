# Obtaining Evinced

## Commonly Used Package Managers
- NPM
- Maven
- Gradle
- Pip, UV
- Nuget
- CocoaPods/swift package manager

Our packages are private EXCEPT for mobile(exception for WDIO). These are hosted at the Evinced Registry: <https://evinced.jfrog.io>; typically customers will mirror this repository.

## Managing Privately Hosted Dependencies 
Typically dependencies are public and availble on registries like NPM or Maven Central. The majority of Evinced's SDK dependencies are private and will have an authentication mechanism in place, typically a JFROG token allowing users to download from the Evinced Registry.



### Package Manager Examples
Defer to the developer documentation for more examples: <https://developer.evinced.com>

### NPM
```bash
npm install @evinced/js-playwright-sdk
npm install @evinced/js-cypress-sdk
npm install @evinced/webdriver-js-sdk
```

**JFrog Repository URLs:**
- Playwright: `https://evinced.jfrog.io/artifactory/restricted-npm/@evinced/js-playwright-sdk`
- Cypress: `https://evinced.jfrog.io/artifactory/restricted-npm/@evinced/js-cypress-sdk`
- Selenium: `https://evinced.jfrog.io/artifactory/restricted-npm/@evinced/js-selenium-sdk`
- WebdriverIO: `https://evinced.jfrog.io/artifactory/restricted-npm/@evinced/webdriverio-sdk`
- TestCafe: `https://evinced.jfrog.io/artifactory/restricted-npm/@evinced/js-testcafe-sdk`

### Maven
```xml
<!-- pom.xml -->
<dependency>
    <groupId>com.evinced</groupId>
    <artifactId>java-selenium-sdk</artifactId>
    <version>VERSIONNUMBERHERE</version>
</dependency>
- - - 
<!-- settings.xml -->
  <!-- EXAMPLE ONLY This should be in your ~/.m2/settings.xml file https://maven.apache.org/settings.html -->
  <!-- <servers>
    <server>
      <id>evinced-repository</id>
        <username>${env.JFROG_USER}</username>
        <password>${env.JFROG_PW}</password>
    </server>
  </servers> -->
```

**JFrog Repository URL:**
- `https://evinced.jfrog.io/artifactory/restricted-maven/com/evinced/selenium_sdk`

### Gradle
```gradle
dependencies {
    implementation 'com.evinced:java-selenium-sdk:+'
    implementation 'com.evinced:espresso-sdk:+'
}
```

**JFrog Repository URL:**
- Java/Android: `https://evinced.jfrog.io/artifactory/public-gradle`

### Pip/UV
```bash
pip install evinced-selenium-sdk
pip install evinced-playwright-python-sdk

# Using UV
uv add evinced-selenium-sdk
uv add evinced-playwright-python-sdk
```

**JFrog Repository URL:**
- Contact Evinced for Python package repository access

### NuGet
```bash
dotnet add package Evinced.Sdk.Selenium
dotnet add package Evinced.Sdk.Playwright
```

**JFrog Repository URL:**
- Contact Evinced for .NET package repository access

### CocoaPods/Swift Package Manager
```
# Podfile
pod 'EvincedXCUISDK'
```

```swift
// Package.swift
.package(url: "https://github.com/GetEvinced/public-ios-xcuisdk", from: "1.0.0")
```

**Repository URLs:**
- CocoaPods: Public repository (no JFrog required)
- Swift Package Manager: `https://github.com/GetEvinced/public-ios-xcuisdk`

