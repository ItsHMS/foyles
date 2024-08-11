import PropTypes from "prop-types";

const Card = ({ title, description, imageUrl }) => (
  <div className="flex items-start bg-cosmos h-full py-10 px-4 w-full max-w-[572.5px]">
    <div className="flex-1 pr-4">
      <p className="text-cod-gray  text-2xl mb-2">{title}</p>
      <p className="text-mine-shaft text-sm ">{description}</p>
      <button className="text-mine-shaft text-sm font-bold">READ MORE</button>
    </div>
    <div className="w-[200px] h-[200px]">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;
