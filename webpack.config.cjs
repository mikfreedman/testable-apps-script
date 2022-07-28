const path = require('path');
const GasPlugin = require("gas-webpack-plugin");
const webpack = require('webpack');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()
const CopyPlugin = require("copy-webpack-plugin");
const pkg = require("./package.json")

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
        new webpack.BannerPlugin({
            banner: () => {
                return `This is an auto generated file, do not edit it directly!
        **********************************************************************
                ref: #${gitRevisionPlugin.commithash().substring(0, 7)} / ${gitRevisionPlugin.branch()}
                repo: ${pkg.repository}
                {name} v${pkg.version}
                (c) 2017-${(new Date()).getFullYear()} ${pkg.author}
                Released under ${pkg.license}.
        **********************************************************************`
            },
            entryOnly: true,
        }),
    ]
};