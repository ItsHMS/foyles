import TabSlider from "../common/TabSlider";
import BookCard from "../common/BookCard";
import SectionInfo from "../common/SectionInfo";
import {bookData} from '../../mock-data/bookData'
import IconComp from "../common/IconComp";
import { iconsData } from "../../mock-data/iconsData";


const BestSeller = () => {
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

  console.log(iconsData)
  return (
    <div className="p-4">
      <SectionInfo
        heading="Our Bestsellers"
      />
      <TabSlider settings={settings}>
        {bookData.map((book) => (
          <div key={book.id} className="pr-4">
            <BookCard item={book} />
          </div>
        ))}
      </TabSlider>

      <div className="flex gap-5 justify-center mt-12">
      {iconsData.map((icon) => (
          <div className="w-auto" key={icon.id}>
            <IconComp icon={icon.img} text={icon.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
