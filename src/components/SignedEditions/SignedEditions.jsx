import { useState } from "react";
import TabSlider from "../common/TabSlider";
import BookCard from "../common/BookCard";
import SectionInfo from "../common/SectionInfo";
import Modal from "../common/Modal";
import BookModal from "../common/BookModal"; // Import the BookModal component
import { bookData } from "../../mock-data/signedEdition";

const SignedEditions = () => {
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
    <div className="p-4 mt-12">
      <SectionInfo heading="Signed Edition" />
      <TabSlider settings={settings}>
        {bookData.map((book) => (
          <div
            key={book.id}
            className="pr-4 mt-3 cursor-pointer"
            onClick={() => handleCardClick(book)} // Add onClick to open modal
          >
            <BookCard item={book} />
          </div>
        ))}
      </TabSlider>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <BookModal isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />
        </Modal>
      )}
    </div>
  );
};

export default SignedEditions;
