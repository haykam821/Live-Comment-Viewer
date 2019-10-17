const React = require("react");
const styled = require("styled-components").default;

const snudown = require("snuownd");
const parser = snudown.getParser();

const Comment = styled(class Comment extends React.Component {
	render() {
		const date = new Date(this.props.full_date).toLocaleString();
		return <div className={this.props.className}>
			<h3 title={date}>
				{this.props.author}:
			</h3>
			<div dangerouslySetInnerHTML={{ __html: parser.render(this.props.body)}} />
		</div>;
	}
})`
	text-align: left;
	background: rgba(0, 0, 0, 0.1);
	padding: 8px;
	border-radius: 8px;
	
	&:not(:last-child) {
		margin-bottom: 8px;
	}

	div {
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		padding: 4px 8px;
	}
`;
module.exports = Comment;