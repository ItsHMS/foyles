import { Fragment } from "react";
import SectionInfo from "../common/SectionInfo";
import { bookData } from "../../mock-data/newOnShelves";
import BookCard from "../common/BookCard";
import TabSlider from "../common/TabSlider";

const NewsOnShelves = () => {
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
    <Fragment>
      <div>
        <SectionInfo heading="News on Shelves" />
        <div className="mt-5">
          <TabSlider settings={settings}>
            {bookData.map((book) => (
              <div key={book.id} className="pr-4">
                <BookCard item={book} />
              </div>
            ))}
          </TabSlider>
        </div>
      </div>
    </Fragment>
  );
};

export default NewsOnShelves;
