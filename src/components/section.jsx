const React = require("react");
const styled = require("styled-components").default;
const propTypes = require("prop-types");

class SectionUnstyled extends React.Component {
	render() {
		return <div className={this.props.className}>
			{this.props.title && <h2>{this.props.title}</h2>}
			{this.props.children}
		</div>;
	}
}
SectionUnstyled.propTypes = {
	children: propTypes.node,
	className: propTypes.string,
	title: propTypes.string,
};

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
module.exports = Section;