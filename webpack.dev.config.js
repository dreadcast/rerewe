'use strict';

var webpack = require('webpack');
var mergeWith = require('lodash/mergeWith');
var baseConfig = require('./webpack.base.config.js');

var config = mergeWith(baseConfig, {
	devtool: 'cheap-source-map',
	devServer: {
		contentBase: './build',
		port: 8080,
		host: 'localhost',
		hot: true,
		stats: {
			colors: true
		},
		historyApiFallback: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
}, customizer);

function customizer(objValue, srcValue) {
	if (Array.isArray(objValue)) {
		return objValue.concat(srcValue);
	}
}

module.exports = config;
