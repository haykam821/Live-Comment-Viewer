require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");

const React = require("react");
const ReactDOM = require("react-dom");

const log = require("./debug.js");

const App = require("./components/app.jsx");

ReactDOM.render(<App/>, document.getElementById("app"), () => {
	log("app has rendered");
});