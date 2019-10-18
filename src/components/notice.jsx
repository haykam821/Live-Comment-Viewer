const React = require("react");
const styled = require("styled-components").default;
const propTypes = require("prop-types");

class NoticeUnstyled extends React.Component {
	render() {
		return <p className={this.props.className}>
			{this.props.children}
		</p>;
	}
}
NoticeUnstyled.propTypes = {
	children: propTypes.node,
	className: propTypes.string,
};

const Notice = styled(NoticeUnstyled)`
	color: #8e8e8e;
	font-style: italic;
`;
module.exports = Notice;