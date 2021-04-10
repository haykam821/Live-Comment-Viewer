require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");

import App from "./components/app";
import React from "react";
import ReactDOM from "react-dom";
import log from "./debug";

ReactDOM.render(<App />, document.getElementById("app"), () => {
	log("app has rendered");
});
