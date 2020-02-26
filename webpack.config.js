const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry: "./client/src/app.js",
        mode: 'development',
        output: {
            path: path.join(__dirname, 'client/public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                }, {
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ],
                    test: /\.s?css$/
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin("style.css")
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'client/public'),
            historyApiFallback: true
        }
    }

}