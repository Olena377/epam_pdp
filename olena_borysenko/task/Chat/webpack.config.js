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
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
      },{
      test:   /\.js$/,
      loader: "babel?presets[]=es2015"
    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'url-loader?limit=100000'
    }]

  },

  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};



