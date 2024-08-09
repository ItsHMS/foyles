import TabSlider from "../common/TabSlider";
import BookCard from "../common/BookCard";
import SectionInfo from "../common/SectionInfo";
import {bookData} from '../../mock-data/bookData';

const SignedEditions = () => {
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
    <div className="p-4 mt-12">
      <SectionInfo
        heading="Signed Edition"
      />
      <TabSlider settings={settings}>
        {bookData.map((book) => (
          <div key={book.id} className="pr-4 mt-3">
            <BookCard item={book} />
          </div>
        ))}
      </TabSlider>
    </div>
  );
};

export default SignedEditions;
