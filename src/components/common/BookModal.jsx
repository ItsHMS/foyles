import PropTypes from "prop-types";

const BookModal = ({ isOpen, onClose, book }) => {
  if (!isOpen) return null;

  return (
    <div className="relative p-4 bg-white rounded-lg max-w-3xl">
      {/* Close Button (X Icon) */}
      <button
        className="absolute top-2 right-2 p-1"
        onClick={onClose}
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>

      {/* Modal Content */}
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur. Arcu netus donec nisl luctus
        fringilla dignissim eget urna. Dolor elit nulla risus habitant nunc amet
        sagittis tincidunt. Habitasse neque vel elementum lobortis amet nulla.
        Nibh suspendisse consequat turpis faucibus praesent pharetra nunc.
        Egestas viverra sed vulputate scelerisque rutrum odio. Interdum feugiat
        proin netus consectetur commodo adipiscing. Pulvinar id malesuada et
        phasellus bibendum nibh vulputate. Amet quam arcu nunc aliquam id
        aliquam mi. Nibh arcu ut magna eleifend vitae sed quam nunc porttitor.
        Mauris sed mollis placerat diam orci ultricies lectus est. Viverra
        varius faucibus morbi sit malesuada.
      </p>
    </div>
  );
};

BookModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  book: PropTypes.object,
};

export default BookModal;
