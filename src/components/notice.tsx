import React, { ReactNode } from "react";

import propTypes from "prop-types";
import styled from "styled-components";

interface NoticeProps {
	className?: string;
	children?: ReactNode;
}

class NoticeUnstyled extends React.Component<NoticeProps> {
	public static readonly propTypes = {
		children: propTypes.node,
		className: propTypes.string,
	};

	render() {
		return <p className={this.props.className}>
			{this.props.children}
		</p>;
	}
}

const Notice = styled(NoticeUnstyled)`
	font-style: italic;

	color: #565656;
	@media (prefers-color-scheme: dark) {
		color: #8e8e8e;
	}
`;
export default Notice;