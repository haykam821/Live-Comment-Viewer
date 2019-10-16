const React = require("react");
const styled = require("styled-components").default;

const Notice = styled(class Notice extends React.Component {
	render() {
		return <p className={this.props.className}>
			{this.props.children}
		</p>;
	}
})`
	color: #8e8e8e;
	font-style: italic;
`;
module.exports = Notice;