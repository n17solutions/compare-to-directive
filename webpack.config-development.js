'use strict';

var webpack 			= require('webpack'),
	ngAnnotatePlugin 	= require('ng-annotate-webpack-plugin');

module.exports = {
	entry: './src/js/app.js',
	output: {
		filename: "n17-compare.js",
		library: "n17compare",
		libraryTarget: "umd"
	},
	plugins: [
		new ngAnnotatePlugin({
			add: true
		})
	]
};