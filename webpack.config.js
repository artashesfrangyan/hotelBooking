const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const WebpackDevServer = require('webpack-dev-server');

module.exports= {
  mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.pug' 
        }),
        new HtmlWebpackPugPlugin(),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.sass$/,
            use: [
              "style-loader", "css-loader", "sass-loader"
            ],
          },
          {
            test: /\.pug$/,
            use: "pug-loader"
          }
        ]
      },
}