/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const { EnvironmentPlugin } = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	mode: process.env.WEBPACK_MODE || "production",
	module: {
		rules: [{
			include: path.resolve(__dirname, "./src"),
			loader: "ts-loader",
			options: {
				transpileOnly: true,
			},
			test: /\.tsx?$/,
		}],
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "./dist"),
	},
	plugins: [
		new EnvironmentPlugin({
			USE_PROXY: process.env.WEBPACK_MODE !== "development",
		}),
		new ForkTsCheckerWebpackPlugin(),
	],
	resolve: {
		extensions: [
			".js",
			".ts",
			".tsx",
		],
	},
};