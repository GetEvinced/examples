# Contributing
Mdbook guide in mdbook: https://rust-lang.github.io/mdBook/index.html. 

## Structure
All written work is in the /src file. For a high level structure see SUMMARY.md. These are the capters. 

## To build and open the book in a browser

`mdbook build ./docs/sdk-manual --open` 



## If actively developing use watch or serve
`mdbook serve ./docs/sdk-manual --open` and this will open it in browser. 

`mdbook watch ./docs/sdk-manual --open`

Changes will be watched for but you may have to manually reload. You shouldn't but you may have to. If you want changes to happen quickly then use serve.

## Code snippets
Use backticks and the language name.
To include a specific file use the {{# include ../path/to/file}}
```javascript
// js-playwright/global.settings.js
{{#include ../../../js-playwright/global.settings.js:3:15}}
```

## Merging in git
rebase?
https://www.youtube.com/watch?v=DkWDHzmMvyg