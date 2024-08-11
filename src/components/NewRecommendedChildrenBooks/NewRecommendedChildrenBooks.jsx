import TabSlider from "../common/TabSlider";
import BookCard from "../common/BookCard";
import SectionInfo from "../common/SectionInfo";
import { bookData } from "../../mock-data/childerenRecommended";

const NewRecommendedChildrenBooks = () => {
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
      <SectionInfo heading="New & Recommended Children's Books" />
      <TabSlider settings={settings}>
        {bookData.map((book) => (
          <div key={book.id} className="pr-4">
            <BookCard item={book} />
          </div>
        ))}
      </TabSlider>
    </div>
  );
};

export default NewRecommendedChildrenBooks;
