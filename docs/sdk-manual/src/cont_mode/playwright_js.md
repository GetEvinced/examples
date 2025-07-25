# Playwright JS

## Simple evStart/EvStop
Use this to get up and running quickly and confirm that Reports are generated as expected. Because this relies on editing each file, spec, or test directly its not a scaleable approach.

[js-playwright/tests/evStartStop.spec.js](https://github.com/GetEvinced/examples/tree/main/js-playwright/tests/evStartStop.spec.js)
```javascript
{{#include ../../../../js-playwright/tests/evStartStop.spec.js:5:25}}
```

## With Hooks: Normal Starting Point
This is done Per Test or .spec file typically. Normally this is a safe entry point to creating a small suite of a11y tests that will run with Evinced.

[js-playwright/tests/evComplicated.spec.js](https://github.com/GetEvinced/examples/tree/main/js-playwright/tests/evComplicated.spec.js)
```javascript
{{#include ../../../../js-playwright/tests/evComplicated.spec.js:9:32}}
```

## With Fixtures
[js-playwright/tests/evFixture.spec.js](https://github.com/GetEvinced/examples/tree/main/js-playwright/tests/evFixture.spec.js)
```javascript
{{#include ../../../../js-playwright/tests/evFixture.spec.js:1:3}}
```