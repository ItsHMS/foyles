import PropTypes from "prop-types";
const ReadMoreButton = () => (
  <button className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded">
    Read More
  </button>
);
const SectionInfo = ({ heading, subtext }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
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
  ReadMoreButton: PropTypes.elementType.isRequired,
};

export default SectionInfo;
