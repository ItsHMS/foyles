import PropTypes from "prop-types";
const ReadMoreButton = () => (
  <button className="bg-mine-shaft hover:bg-gray-700 text-white py-1 text-xs px-2 rounded">
    SEE MORE
  </button>
);
const SectionInfo = ({ heading, subtext }) => {
  return (
    <div className="w-full pb-3">
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl">{heading}</h2>
        <ReadMoreButton />
      </div>
      {subtext && <p className="text-sm text-left text-gray-600">{subtext}</p>}
    </div>
  );
};

SectionInfo.propTypes = {
  heading: PropTypes.string.isRequired,
  subtext: PropTypes.string,
};

export default SectionInfo;
