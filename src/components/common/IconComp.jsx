import PropTypes from "prop-types";

const IconComp = ({ icon, text }) => (
  <div className="icon-main">
    <img src={icon} className="w-[96px] h-[96px]" alt={text} />
    <h4 className="text-center font-bold text-sm mt-2">{text}</h4>
  </div>
);

IconComp.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default IconComp;
