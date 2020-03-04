const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry: "./client/src/app.js",
        mode: 'development',
        output: {
            path: path.join(__dirname, 'client/public/build'),
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
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    test: /\.s?css$/
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin("style.css")
        ],
        devtool: isProduction ? 'source-map' : 'eval-cheap-source-map',
        devServer: {
            contentBase: './server.js',
            historyApiFallback: true,
            publicPath: path.join(__dirname, 'client/public/build')
        }
    }

}