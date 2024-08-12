import { useState, Fragment } from "react";
import SectionInfo from "../common/SectionInfo";
import { bookData } from "../../mock-data/newOnShelves";
import BookCard from "../common/BookCard";
import TabSlider from "../common/TabSlider";
import Modal from "../common/Modal";
import BookModal from "../common/BookModal"; // Import the BookModal component

const NewsOnShelves = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCardClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <div>
        <SectionInfo heading="News on Shelves" />
        <div className="mt-5">
          <TabSlider settings={settings}>
            {bookData.map((book) => (
              <div
                key={book.id}
                className="pr-4 cursor-pointer"
                onClick={() => handleCardClick(book)} // Add onClick to open modal
              >
                <BookCard item={book} />
              </div>
            ))}
          </TabSlider>
        </div>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <BookModal isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />
        </Modal>
      )}
    </Fragment>
  );
};

export default NewsOnShelves;
