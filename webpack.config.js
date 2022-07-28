const path = require('path');
const GasPlugin = require("gas-webpack-plugin");
const webpack = require('webpack');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/addon.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new GasPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "src/appsscript.json", noErrorOnMissing: true, },
            ],
        }),
    ]
};