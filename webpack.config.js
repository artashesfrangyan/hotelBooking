const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports= {
    mode: 'development',
    context: path.resolve(__dirname, 'assets'),
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html' 
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              // [style-loader](/loaders/style-loader)
              { loader: 'style-loader' },
              // [css-loader](/loaders/css-loader)
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              },
              // [sass-loader](/loaders/sass-loader)
              { loader: 'sass-loader' }
            ]
          }
        ]
      }
}