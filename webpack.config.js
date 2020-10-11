const path = require('path');
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  entry: './src/addon.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new GasPlugin()
  ]
};