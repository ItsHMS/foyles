import PropTypes from "prop-types";

const VerticalSpacing = ({ height = "3.125rem" }) => {
  return <div style={{ height }}></div>;
};

VerticalSpacing.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default VerticalSpacing;