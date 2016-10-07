'use strict';

let ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {

  context: path.resolve('frontend'),

  entry: ['./main'],

  output: {
    path: path.resolve('build'),
    filename: 'app.js'
  },
  
  //
  // context: __dirname + '/frontend',
  // entry:  {
  //   main: './main'
  // },
  // output:  {
  //   path:     __dirname + '/public',
  //   publicPath: '/',
  //   filename: '[name].js'
  // },

  resolve: {
    extensions: ['', '.js', '.scss']
  },

  module: {

    loaders: [
     {
      test:   /\.js$/,
      loader: "babel?presets[]=es2015"
    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2|otf)/i,
      exclude: /(node_modules|bower_components)/,
      loader: 'url-loader?limit=100000'
    }]

  },

  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};



