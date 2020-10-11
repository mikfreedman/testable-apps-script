# testable-apps-script

## Installation

```bash
yarn install
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

```