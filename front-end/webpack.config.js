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
		new extractCSS("css/bundle.css"),
		new copyAssets([{ from: "images", to: "img" }]),
		new copyAssets([{ from: "*.html" }])
	],
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/bundle.js"
	}
};
