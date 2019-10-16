const React = require("react");
const styled = require("styled-components").default;

const Section = styled(class Section extends React.Component {
	render() {
		return <div className={this.props.className}>
			{this.props.title && <h2>{this.props.title}</h2>}
			{this.props.children}
		</div>;
	}
})`
	width: 50%;
	max-width: 500px;
	margin-top: 8px;

	background: #555;
	border-radius: 8px;
	padding: 8px;

	text-align: center;
`;
module.exports = Section;