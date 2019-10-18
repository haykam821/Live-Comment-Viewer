const React = require("react");
React.__spread = Object.assign;
const styled = require("styled-components").default;
const propTypes = require("prop-types");

const log = require("../debug.js");

const Section = require("./section.jsx");
const Notice = require("./notice.jsx");
const Comment = require("./comment.jsx");

const connectionNotices = {
	connected: "Connected to comment websocket!",
	connecting: "Connecting to comment websocket...",
	disconnected: "Disconnected from comment websocket.",
	none: "Not connected to comment websocket.",
};

class AppUnstyled extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			connectionState: "none",
			postID: new URLSearchParams(location.search).get("id"),
		};

		this.connectSocket = this.connectSocket.bind(this);
		this.updatePost = this.updatePost.bind(this);
	}

	componentDidMount() {
		if (this.state.postID !== null) {
			this.connectSocket();
		}
	}

	async getSocketURL(id = this.state.postID) {
		const response = await fetch("https://gateway.reddit.com/desktopapi/v1/postcomments/" + id).then(res => res.json());
		const url = response.posts["t3_" + id].liveCommentsWebsocket;

		log("got websocket URL: %s", url);
		return url;
	}

	async connectSocket() {
		if (this.socket instanceof WebSocket) {
			this.socket.close();
			log("closing previously opened socket");
		}

		this.setState({
			connectionState: "connecting",
		});
		this.socket = new WebSocket(await this.getSocketURL());
		log("opening new socket");

		this.socket.addEventListener("open", () => {
			this.setState({
				connectionState: "connected",
			});
			log("opened new socket");
		});
		this.socket.addEventListener("close", () => {
			this.setState({
				connectionState: "disconnected",
			});
			log("socket closed");
		});
		this.socket.addEventListener("message", event => {
			try {
				const data = JSON.parse(event.data);
				if (data.type === "new_comment") {
					log("recieved new message");
					this.setState({
						comments: [data.payload].concat(this.state.comments),
					});
				} else {
					log("recieved message of type '%s'", data.type);
				}
			} catch (error) {
				log("error when handling message:", error);
			}
		});
	}

	updatePost(postURL) {
		if (typeof postURL === "object") {
			postURL = postURL.target.value;
		}
		if (typeof postURL !== "string") return;

		log("updated post ID to '%s'", postURL);
		this.setState({
			// No URL parsing for now
			postID: postURL,
		});
	}

	render() {
		return <div className={this.props.className}>
			<h1>Live Comment Viewer</h1>
			<Section title="Post">
				<input value={this.state.postID || ""} placeholder="Post URL..." type="url" onChange={this.updatePost} />
				<br />
				<button onClick={this.connectSocket}>(Re)connect</button>
				<Notice>{connectionNotices[this.state.connectionState] || "Unknown connection state"}</Notice>
			</Section>
			<Section title="Chat">
				{this.state.comments.length === 0 ? <Notice>No chat messages yet...</Notice> : this.state.comments.map(comment => {
					return <Comment key={comment.name} {...comment}>{comment.body}</Comment>;
				})}
			</Section>
		</div>;
	}
}
AppUnstyled.propTypes = {
	className: propTypes.string,
};

const App = styled(AppUnstyled)`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;


	padding: 16px;
	font-family: sans-serif;

	background: #f3f3f3;
	color: #2d2d2d;
	@media (prefers-color-scheme: dark) {
		background: #333;
		color: #ccc;
	}

	h1, h2, h3 {
		margin: 0;
		margin-bottom: 0.3em;
		font-weight: bold;
	}

	input, button {
		box-sizing: border-box;
		border: 1px solid;
		padding: 4px;
		margin: 4px 0;
		width: 50%;
		border-radius: 8px;

		background-color: #efefef;
		border-color: #b1b1b1;
		@media (prefers-color-scheme: dark) {
			background-color: #eee;
			border-color: #333;
		}
	}
	button {
		border-radius: 4px;
		width: 45%;

		color: #2f2f2f;
		@media (prefers-color-scheme: dark) {
			color: black;
		}
	}

	p {
		margin: 6px 0;
	}
`;
module.exports = App;