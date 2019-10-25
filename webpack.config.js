const path = require("path");
const { EnvironmentPlugin } = require("webpack");

module.exports = {
	entry: "./src/index.jsx",
	mode: process.env.WEBPACK_MODE || "production",
	module: {
		rules: [{
			test: /\.jsx$/,
			use: "jsx-loader",
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
	],
};