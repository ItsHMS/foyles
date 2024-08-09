import { Fragment } from "react";
import SectionInfo from "../common/SectionInfo";
import { bookData } from "../../mock-data/bookData";
import BookCard from "../common/BookCard";
import TabSlider from "../common/TabSlider";

const CommingSoon = () => {
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
      <div className="p-4 mt-20">
        <SectionInfo heading="Comming Soon" />
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

export default CommingSoon;
