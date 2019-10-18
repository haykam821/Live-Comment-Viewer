const React = require("react");
const styled = require("styled-components").default;
const propTypes = require("prop-types");

const snudown = require("snuownd");
const parser = snudown.getParser();

class CommentUnstyled extends React.Component {
	render() {
		const date = new Date(this.props.full_date).toLocaleString();
		return <div className={this.props.className}>
			<h3 title={date}>
				{this.props.author}:
			</h3>
			<div dangerouslySetInnerHTML={{ __html: parser.render(this.props.body) }} />
		</div>;
	}
}
CommentUnstyled.propTypes = {
	author: propTypes.string,
	body: propTypes.string,
	className: propTypes.string,
	/* eslint-disable-next-line camelcase */
	full_date: propTypes.string,
};

const Comment = styled(CommentUnstyled)`
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