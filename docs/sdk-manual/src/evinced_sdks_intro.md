# Chapter 1
Official Development Docs: <https://developer.evinced.com/>

All code examples: <https://github.com/GetEvinced/examples/>

Evinced Software Development Kits(SDKs) will attempt to scan the screen for accessibility issues. A screen is what is available during a test, including the full Document Object Model(DOM) or Accessibility Tree. This could be a mobile app or a browser. In laymans terms it will scan what is available either one time, or continusly when an event[^event] fires.

After the testing/scanning phase is completed a report is produced in a chosen format, typically HTML. This report AKA Artifact is self-contained and includes quick-fixes, in-depth details, and screenshots of the various accessibility issues found. 

Once a report is generated remediation is pursued either by logging the report as a development issue or by quickly performing the suggested changes. Manual confirmation and testing of any fixes is typcially pursued with the Mobile Flow Analyzer (Desktop App) or the Web Flow Analyzer (Chrome Extension).

This guide will contain code an explanation and code examples for:
- authenticating against Evinced servers
- setting up Continuous mode 
- calling a single scan of the current state: Analyze mode
- Miscellanous questions related to edge cases or larger scale usage

```javascript
{{#include ../../../js-playwright/tests/evComplicated.spec.js:9:26}}
```

[^event]: A click, tap, keypress, any sort of interaction with the web page or mobile app.