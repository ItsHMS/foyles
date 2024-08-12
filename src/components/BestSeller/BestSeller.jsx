import { useState } from "react";
import TabSlider from "../common/TabSlider";
import BookCard from "../common/BookCard";
import SectionInfo from "../common/SectionInfo";
import { bookData } from "../../mock-data/bestSeller";
import Modal from "../common/Modal";
import BookModal from "../common/BookModal";

const BestSeller = () => {
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
    // responsive: [
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //         }
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //         }
    //     }
    // ]
  };

  return (
    <div className="px-5">
      <SectionInfo heading="Our Bestsellers" />
      <TabSlider settings={settings}>
        {bookData.map((book) => (
          <div
            key={book.id}
            className="pr-4 mt-3 cursor-pointer"
            onClick={() => handleCardClick(book)}
          >
            <BookCard item={book} />
          </div>
        ))}
      </TabSlider>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <BookModal
            isOpen={isModalOpen}
            onClose={closeModal}
            book={selectedBook}
          />
        </Modal>
      )}
    </div>
  );
};

export default BestSeller;
