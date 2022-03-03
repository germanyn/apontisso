// @ts-check

const slsw = require('serverless-webpack');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
 const configuration = {
	entry: slsw.lib.entries,
	target: 'node',
	mode: slsw.lib.webpack.isLocal ? "development" : "production",
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: ['.tsx', '.ts', '.js'],
	},
};

module.exports= configuration