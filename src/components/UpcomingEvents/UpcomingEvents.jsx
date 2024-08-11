import TabSlider from "../common/TabSlider";
import Card from "./Card";
import SectionInfo from "../common/SectionInfo";
import image1 from "../../assets/images/upcomingevents/image1.png";
import image2 from "../../assets/images/upcomingevents/image2.png";
import "../../styles/upcomingevnts/upcomingevents.css";

const UpcomingEvents = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
    <div className="px-5 upcoming-event-slider">
      <SectionInfo
        heading="Upcoming Events at Foyles"
        subtext="Authors in conversation, panel discussions and all manner of literary talk"
      />
      <TabSlider settings={settings}>
        <Card
          title="Anton Hur in Conversation with Simon Savidge"
          date="Thursday 15th August 2024, 7:00pm"
          location="Foyles Charing Cross Road"
          description="The acclaimed translator of Cursed Bunny visits Foyles for the London launch of his debut novel, Toward Eternity."
          imageUrl={image1}
        />
        <Card
          title="Xiaolu Guo in Conversation with Iain Sinclair"
          date="Tuesday 3rd September 2024, 7:00pm"
          location="Foyles Charing Cross Road"
          description="Xiaolu Guo, the author of Once upon a Time in the East, talks to Iain Sinclair about her beautiful and searching chronicle of life in Hastings and her reflections on English history, My Battle of Hastings."
          imageUrl={image2}
        />
      </TabSlider>
    </div>
  );
};

export default UpcomingEvents;
