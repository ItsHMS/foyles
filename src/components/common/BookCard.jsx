import PropTypes from 'prop-types';

const BookCard = ({ item }) => {
  return (
    <div className="book-card w-[130px] bg-white">
      <img src={item.image} alt={item.title} className=" h-[11.5rem] object-contain object-left mb-[0.625rem]" />
      <h3 className="text-xs font-semibold mb-1 truncate">{item.title}</h3>
      <div className="flex gap-1">
        {item.discountedPrice ? (
          <>
            <p className="text-xs text-gray-400 line-through mr-2">${item.price.toFixed(2)}</p>
            <p className="text-xs  text-red-600">${item.discountedPrice.toFixed(2)}</p>
          </>
        ) : (
          <p className="text-xs font-bold">${item.price.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

BookCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number
  }).isRequired
};

export default BookCard;