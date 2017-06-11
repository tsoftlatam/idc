var path = require('path');
var extractCSS = require('extract-text-webpack-plugin');
var copyAssets = require('copy-webpack-plugin');

module.exports = {
	module: {
		rules: [{
			test: /\.css$/,
			use: extractCSS.extract({ use: 'css-loader' })
		}]
	},
	plugins: [
		new extractCSS("bundle.css"),
		new copyAssets([{ from: "images" }])
	],
	entry: "./app/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	}
};
