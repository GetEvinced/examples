# Authentication
Evinced SDKs will always require a **USER ID** and a **SECRET** of some kind. A **SECRET** could be an API key obtained from <https://hub.evinced.com> or a JSON Web Token(JWT) provided by an evinced employee.

>If you are using a API key typically this is referred to as a `secret` in the `setCredentials()` method.
>
>If you are using a JWT then this is referred to as a `token`. 

Use your local Environment variables or whatever current secret management system your team must conform to.

## Node JS Environment
### Playwright JS/TS
```javascript
// js-playwright/global.settings.js
{{#include ../../../js-playwright/global.settings.js:3:15}}

```

### Cypress
```javascript
// js-cypress/cypress/support/e2e.js
{{#include ../../../js-cypress/cypress/support/e2e.js:27:30}}
```

### Testcafe
```javascript
// js-testcafe-web/.testcaferc.js
{{#include ../../../js-testcafe-web/.testcaferc.js:17:35}}
```

### WDIO Web & Mobile
```javascript
// WEB js-wdio-web/wdio.conf.js
{{#include ../../../js-wdio-web/wdio.conf.js:5:23}}
```

```javascript
// MOBILE js-wdio-mobile/test/specs/mobileTest.js
{{#include ../../../js-wdio-mobile/test/specs/mobileTest.js:8:13}}
```

### Unit Tester
```javascript
// nextjs-react-unit-tester/jest.setup.js
{{#include ../../../nextjs-react-unit-tester/jest.setup.js}}
```

## Java
### Selenium
```java
// java-selenium-web/src/test/java/com/krissutherland/EvincedSetupTest.java
{{#include ../../../java-selenium-web/src/test/java/com/krissutherland/EvincedSetupTest.java:33}}
```


{{#include ./snippets/official_docs.md}}
