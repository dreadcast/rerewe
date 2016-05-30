'use strict';

var ROOT = process.env.PWD;
var path = require('path');
var nodeModulesDir = path.resolve('node_modules');
var webpack = require('webpack');
var htmlWPPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var mdParser = require('./app/util/markdown.js');

var config = {
	entry: {
		app: [
			'webpack/hot/dev-server',
			path.resolve('./app/index.jsx')
		],
		common: require('./common.js'),
	},
	output: {
		path: path.resolve('build'),
		filename: '[name].js?[hash]',
		chunkFilename: '[name].js?[hash]',
		publicPath: '/',
	},
	resolve: {
		extensions: ['', '.js'],
		root: path.resolve('app'),
		moduleDirectories: [nodeModulesDir]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common', 'common.js?[hash]'),
		new htmlWPPlugin({
			chunksToInclude: ['app', 'common'],
			template: 'app/index.html',
			dev: process.env.NODE_ENV == 'dev'
		})
	],
	module: {
		eslint: {
			configFile: './.eslintrc'
		},
		// preLoaders: [
		// 	{
		// 		test: /\.(js|jsx)$/,
		// 		exclude: nodeModulesDir,
		// 		include: /app/,
		// 		loader: 'eslint-loader'
		// 	}
		// ],
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['react-hot', 'babel'],
				exclude: nodeModulesDir
			}, {
				test:   /\.less$/,
				loader: 'style-loader!css-loader!postcss-loader!less-loader?strictMath'
			}, {
				test:   /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			}, {
				test   : /\.(jpg|png|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader : 'file?name=[name].[ext]?[hash]'
			}, {
				test: /\.md$/,
				loader: 'html!markdown',
			},
		],
		postcss: [
			autoprefixer({
				browsers: ['last 2 versions']
			})
		]
	},
};

module.exports = config;
