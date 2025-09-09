# testable-apps-script

![test](https://github.com/mikfreedman/testable-apps-script/actions/workflows/test.yml/badge.svg)

Developing code for [Google Apps Script](https://developers.google.com/apps-script) can be fun, but not being able to test things or use a regular javascript pipeline can be quite annoying.

This project uses a combination of 

* [esbuild](https://esbuild.github.io/)
* [Google Clasp](https://github.com/google/clasp)
* [Jest](https://jestjs.io/)

To create a workable javascript pipeline for your [V8 Apps Script](https://developers.google.com/apps-script/guides/v8-runtime) project.

## Installation

First, enable the Google Apps Script API: https://script.google.com/home/usersettings

```bash
npm install

npm run clasp login # Setup clasp for pushing code to google
```

Create a `.clasp.json` in the root of the project that looks like this

```json
{
  "scriptId": "[script id from url]",
  "rootDir": "dist/"
}
```
Then, update the [Apps Script Manifest](https://developers.google.com/apps-script/concepts/manifests) located here: [src/appsscript.json](src/appsscript.json)


## Development
[src/addon.ts](src/addon.ts) is the main entrypoint of the application, add your code there!

Be sure to add functions that you want Google Apps Script to see to the global variable created at the top of the file.

```javascript
global.newFunction = function() {
    console.log("newFunction")
}
```

## Testing

```bash
npm test
```

## Deploy

``` bash
npm run deploy
```
