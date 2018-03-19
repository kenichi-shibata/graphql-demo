const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node', // don't touch any built in node native modules (fs et.al.)
  externals: [nodeExternals()], // don\t touch node_modules

  // loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin({title: 'Webpack demo'})]
};

