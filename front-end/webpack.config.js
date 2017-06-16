var path = require('path');
var extractCSS = require('extract-text-webpack-plugin');
var copyAssets = require('copy-webpack-plugin');

module.exports = {
	module: {
		rules: [{
			test: /\.css$/,
			use: extractCSS.extract({ use: 'css-loader' })
		}, {
			test: /\.jsx$/,
			include: path.resolve(__dirname, "src"),
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new extractCSS("css/bundle.css"),
		new copyAssets([{ from: "images", to: "img" }]),
		new copyAssets([{ from: "*.html" }])
	],
	entry: path.resolve(__dirname, "src/index.jsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/bundle.js"
	}
};
