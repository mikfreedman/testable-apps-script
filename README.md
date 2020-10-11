# testable-apps-script

Developing code for [Google Apps Script](https://developers.google.com/apps-script) can be fun, but not being able to test things or use a regular javascript pipeline can be quite annoying.

This project uses a combination of 

* [Webpack](https://webpack.js.org/)
* [Karma](https://karma-runner.github.io/latest/index.html) / [Jasmine](https://jasmine.github.io)
* [Google Clasp](https://github.com/google/clasp)

To create a workable javascript pipeline for your [V8 Apps Script](https://developers.google.com/apps-script/guides/v8-runtime) project.

## Installation

First, enable the Google Apps Script API: https://script.google.com/home/usersettings

```bash
yarn install

yarn run clasp login # Setup clasp for pushing code to google
yarn run clasp pull  # Remove any code files you don't need, leave the appscript.json
```

Create a `.clasp.json` in the root of the project that looks like this


```json
{
  "scriptId": "[script id from url]",
  "rootDir": "dist/"
}
```

## Development
[src/addon.js](src/addon.js) is the main entrypoint of the application, add your code there!

Be sure to add functions that you want Google Apps Script to see to the global variable created at the top of the file.

```javascript
global.newFunction = function() {
    console.log("newFunction")
}
```

## Testing

```bash
yarn test
```

## Deploy

``` bash
yarn run deploy
```
