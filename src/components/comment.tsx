import React from "react";
import propTypes from "prop-types";
import snudown from "snuownd";
import styled from "styled-components";

const parser = snudown.getParser();


interface CommentProps {
	author: string;
	body: string;
	className?: string;
	/* eslint-disable-next-line camelcase */
	full_date: string;
}

class CommentUnstyled extends React.Component<CommentProps> {
	public static readonly propTypes = {
		author: propTypes.string,
		body: propTypes.string,
		className: propTypes.string,
		/* eslint-disable-next-line camelcase */
		full_date: propTypes.string,
	};

	render() {
		const date = new Date(this.props.full_date).toLocaleString();
		return <div className={this.props.className}>
			<h3 title={date}>
				{this.props.author}:
			</h3>
			<div dangerouslySetInnerHTML={{
				__html: parser.render(this.props.body),
			}} />
		</div>;
	}
}

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
export default Comment;
