import TabSlider from "../common/TabSlider";
import { featuredBookCards } from "../../mock-data/bookData";

const FeaturedBooks = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
      <TabSlider settings={settings}>
        {featuredBookCards.map((book) => (
          <div key={book.id} className="pr-4">
            <img src={book.image} alt={book.title} />
          </div>
        ))}
      </TabSlider>
    </div>
  );
};

export default FeaturedBooks;
