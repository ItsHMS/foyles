import PropTypes from 'prop-types';

const BookCard = ({ item }) => {
  return (
    <div className="book-card p-4 bg-white shadow-lg rounded-lg">
      <img src={item.image} alt={item.title} className="w-full h-40 object-cover mb-2 rounded" />
      <h3 className="text-lg font-semibold mb-1 truncate">{item.title}</h3>
      <div className="flex items-center">
        {item.discountedPrice ? (
          <>
            <p className="text-sm text-gray-400 line-through mr-2">${item.price.toFixed(2)}</p>
            <p className="text-sm font-bold text-red-600">${item.discountedPrice.toFixed(2)}</p>
          </>
        ) : (
          <p className="text-sm font-bold">${item.price.toFixed(2)}</p>
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