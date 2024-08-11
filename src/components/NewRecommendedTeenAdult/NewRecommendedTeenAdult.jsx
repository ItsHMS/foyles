import TabSlider from "../common/TabSlider";
import SectionInfo from "../common/SectionInfo";
import { bookData } from "../../mock-data/recommendedAdult";

const NewRecommendedTeenAdult = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    rows: 2,
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
      <SectionInfo heading="New & Recommended Teen & Young Adult" />
      <TabSlider settings={settings}>
        {bookData.map((book) => (
          <div key={book.id} className="pr-4 pb-2">
            <img src={book.image} />
          </div>
        ))}
      </TabSlider>
    </div>
  );
};

export default NewRecommendedTeenAdult;
