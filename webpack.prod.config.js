'use strict';

var webpack = require('webpack');
var mergeWith = require('lodash/mergeWith');
var baseConfig = require('./webpack.base.config.js');
var LessPluginCleanCSS = require('less-plugin-clean-css');

var config = mergeWith(baseConfig, {
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			output: {comments: false}
		}),
		new webpack.optimize.DedupePlugin(),
	],
	lessLoader: {
		lessPlugins: [
			new LessPluginCleanCSS({
				advanced: true
			})
		]
	}
}, customizer);

function customizer(objValue, srcValue) {
	if (Array.isArray(objValue)) {
		return objValue.concat(srcValue);
	}
}

module.exports = config;
