import React, { ReactNode } from "react";

import propTypes from "prop-types";
import styled from "styled-components";

interface SectionProps {
	children?: ReactNode;
	className?: string;
	title: string;
}

class SectionUnstyled extends React.Component<SectionProps> {
	public static readonly propTypes = {
		children: propTypes.node,
		className: propTypes.string,
		title: propTypes.string,
	};

	render() {
		return <div className={this.props.className}>
			{this.props.title && <h2>{this.props.title}</h2>}
			{this.props.children}
		</div>;
	}
}

const Section = styled(SectionUnstyled)`
	width: 50%;
	max-width: 500px;
	margin-top: 8px;

	border-radius: 8px;
	padding: 8px;

	background: #cecece;
	@media (prefers-color-scheme: dark) {
		background: #555;
	}

	text-align: center;
`;
export default Section;