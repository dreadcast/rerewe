'use strict';

const Path = require('path');
const nodeModulesDir = Path.resolve('node_modules');
const webpack = require('webpack');
const htmlWPPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config = {
	entry: {
		app: Path.resolve('./app/index.jsx'),
		common: require('./common.js'),
	},
	output: {
		path: Path.resolve('build'),
		filename: '[name].js?[hash]',
		chunkFilename: '[name].js?[hash]',
		publicPath: '/',
	},
	resolve: {
		// extensions: ['', '.js'],
		modules: [
			Path.resolve(__dirname + '/app'),
			nodeModulesDir,
		],
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'common.js?[hash]',
			minChunks: 2,
		}),
		new htmlWPPlugin({
			chunksToInclude: ['app', 'common'],
			template: 'app/index.html',
			dev: process.env.NODE_ENV == 'dev'
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: nodeModulesDir,
				enforce: 'pre',
				include: /app/,
				loader: 'eslint-loader',
			},
			{
				test: /\.(js|jsx)$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', 'es2015', 'stage-0'],
						},
					},
				],
				exclude: nodeModulesDir,
			}, {
				test: /\.less$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							plugins: loader => [require('autoprefixer')()],
						},
					},
					{ loader: 'less-loader' },
				],
			}, {
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							// sourceMap: true,
							plugins: loader => [require('autoprefixer')()],
						},
					},
				],
			}, {
				test: /\.(jpg|ico|cur|png|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name]_[hash].[ext]',
					},
				},
			}, {
				test: /\.md$/,
				use: [
					{ loader: 'html-loader' },
					{ loader: 'markdown-loader' },
				],
			},
		],
	},
};

module.exports = config;
