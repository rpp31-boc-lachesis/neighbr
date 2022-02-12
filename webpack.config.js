// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const path = require('path');

const entryDir = path.join(__dirname, 'client/src/index.jsx');
const outputDir = path.join(__dirname, 'client/dist');

module.exports = {
  entry: entryDir,
  output: {
    filename: 'bundle.js',
    path: outputDir,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  // devtool: 'source-map'
};
