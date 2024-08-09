import TabSlider from "../common/TabSlider";
import BookCard from "../common/BookCard";
import SectionInfo from "../common/SectionInfo";
import {bookData} from '../../mock-data/bookData';
import IconComp from "../common/IconComp";
import { BooksTlakData } from "../../mock-data/iconsData";



const BooksEveryOneTalks = () => {
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
    <div className="p-4 mt-5">
      <SectionInfo
        heading="Books everyone is talking about..."
        subtext="Prizewinners, books in the news, on screen and stage"
      />
      <TabSlider settings={settings}>
        {bookData.map((book) => (
          <div key={book.id} className="pr-4 mt-3">
            <BookCard item={book} />
          </div>
        ))}
      </TabSlider>

      <div className="flex gap-5 justify-center mt-12">
      {BooksTlakData.map((icon) => (
          <div className="w-auto" key={icon.id}>
            <IconComp icon={icon.img} text={icon.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksEveryOneTalks;
