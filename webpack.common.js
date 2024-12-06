const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: {
		main: './src/index.js',
	},

	mode: 'none',

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			chunks: ['main'],
			filename: 'index.html',
			// 	favicon: './src/assets/brand.png', // Path to your favicon
		}),

		new HtmlWebpackPlugin({
			template: './src/html/listings.html',
			chunks: ['main'],
			filename: 'listings.html',
			// 	favicon: './src/assets/brand.png', // Path to your favicon
		}),

		new Dotenv({
			systemvars: true,
		}),

		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{ from: './src/assets/brand.png', to: 'brand.png' }, // Copy the favicon to the output directory
		// 	],
		// }),
	],

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader', // Creates `style` nodes from JS strings
					'css-loader', // Translates CSS into CommonJS
					'sass-loader', // Compiles Sass to CSS
				],
			},

			{
				test: /\.html$/,
				use: ['html-loader'],
			},

			// file loader for images
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',

						options: {
							name: 'assets/[path][name].[ext]',
						},
					},
				],
			},

			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};
