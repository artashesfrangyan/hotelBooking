const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const WebpackDevServer = require('webpack-dev-server');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports= {
  mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
      'index': './js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          chunks: ['index', 'common'],
          template: path.resolve(__dirname, 'src/index.pug')
        }),
        // new HtmlWebpackPlugin({
        //     template: './index.pug' 
        // }),
        // new HtmlWebpackPugPlugin(),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './images',
              to: './images',
              toType: 'dir',
            },
          ]
        }),
        new CleanWebpackPlugin(),
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
          },
          {
            test: /\.(jpg|png|svg)$/,
            loader: 'file-loader',
            options: {
                name: 'images/[name].[ext]'
            },
        }, 
        ]
      },
}