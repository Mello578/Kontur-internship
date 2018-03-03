'use strict';
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const CopyWebpackPlugin =require('copy-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['.src', '.js']
	},
	entry:  {
		'bundle': './js/index.js',
		'toRemovePreloader': './js/toRemovePreloader.js'
	},
	output: {
		path:  __dirname + '/../../dist/js/',
		publicPath: __dirname + '/../../dist/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
					{
						loader: 'css-loader',
						options: {
							url: false,
							minimize: true
						}
					}
					]
				})
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				loader: "url-loader"
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('../style/main.css'),
		new CopyWebpackPlugin([
			{ from: 'img', to: '../img/'},
			{ from: 'public', to: '../public/'}
		]),
	]
};