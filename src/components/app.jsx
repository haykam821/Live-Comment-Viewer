const React = require("react");
const styled = require("styled-components").default;

const Section = require("./section.jsx");
const Notice = require("./notice.jsx");

const App = styled(class App extends React.Component {
	render() {
		return <div className={this.props.className}>
			<h1>Live Comment Viewer</h1>
			<Section title="Post">
				<input placeholder="Post URL..." type="url"></input>
			</Section>
			<Section title="Chat">
				<Notice>No chat messages yet...</Notice>
			</Section>
		</div>;
	}
})`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 16px;
	background: #333;
	color: #ccc;

	font-family: sans-serif;

	h1, h2 {
		margin: 0;
		font-weight: bold;
	}

	input {
		box-sizing: border-box;
		background-color: #eee;
		border: 1px solid #333;
		padding: 4px;
		margin: 8px 0;
		width: 50%;
		border-radius: 8px;
	}

	p {
		margin: 6px 0;
	}
`;
module.exports = App;