const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',

	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader, // adding this here for production purpases to extract css into files

					'css-loader', // Translates CSS into CommonJS

					'sass-loader', // Compiles Sass to CSS
				],
			},
		],
	},
});
