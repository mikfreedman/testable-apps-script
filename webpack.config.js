const path = require('path');
const GasPlugin = require("gas-webpack-plugin");
const TemplateBannerPlugin = require('template-banner-webpack-plugin');

module.exports = {
    entry: './src/addon.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new GasPlugin(),
        new TemplateBannerPlugin({
            banner: `This is an auto generated file, do not edit it directly!
**********************************************************************
        repo: {repository}
        {name} v{version}
        (c) 2017-{year} {author}
        Released under the {license}.
**********************************************************************`,
            default(data) {
                return {
                    year: (new Date()).getFullYear(),
                    license: `${data.license} License`
                };
            },
        })
    ]
};