const path = require("path");

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
};