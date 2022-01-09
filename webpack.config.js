const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: '/dist',
  },
  watchOptions: {
    poll: true,
    ignored: '/node_modules/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To do list!',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
    hashFunction: "xxhash64"
  },

  module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     ],
   },
   performance: {
    hints: false
  },
};

/*
    production

  output: {
    publicPath: '/to-do-list/',
    path: path.join(process.cwd(), 'dist'),
    filename: 'main.js',
    clean: true,
    hashFunction: "xxhash64"
  },

*/

/*
    development
    
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
    hashFunction: "xxhash64"
  },

*/