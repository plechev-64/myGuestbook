const webpack = require('webpack');
const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    NODE_ENV: '"production"',
    API_ENDPOINT: '"http://www.youproject.com/api"'
}

Encore
    .setOutputPath('public/')
    .setPublicPath('/')
    .cleanupOutputBeforeBuild()
    .addEntry('app', './src/app.js')
    .enableSassLoader()
    .enablePreactPreset()
    .enableSingleRuntimeChunk()
    .addPlugin(new HtmlWebpackPlugin({ template: 'src/index.ejs', alwaysWriteToDisk: true }))
    .addPlugin(new webpack.DefinePlugin({
        'ENV_API_ENDPOINT': JSON.stringify('https://127.0.0.1:8000/'), //JSON.stringify(process.env.API_ENDPOINT),
    }))
;

module.exports = Encore.getWebpackConfig();