import TabSlider from "../common/TabSlider";
import Card from "./Card";
import SectionInfo from "../common/SectionInfo";
import image1 from "../../assets/images/furtherreading/image1.png";
import image2 from "../../assets/images/furtherreading/image2.png";
import "../../styles/upcomingevnts/upcomingevents.css";

const FurtherReading = () => {
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
        heading="Further Reading"
        subtext="Extracts, blogs, articles, interviews and more: taking you behind the scenes of all things bookish and giving you a flavour of what’s coming up"
      />
      <TabSlider settings={settings}>
        <Card
          title="Top Ten Reads for August"
          description="August approaches, and we have a summery slew of great books to look forward to."
          imageUrl={image1}
        />
        <Card
          title="Extract from Ex-Wife by Ursula Parrott"
          description="Published as part of Faber’s Editions series―spotlighting rediscovered gems from the Faber archive and beyond―Ex-Wife is a darkly funny, gloriously bohemian portrait of divorce during the roaring twenties."
          imageUrl={image2}
        />
      </TabSlider>
    </div>
  );
};

export default FurtherReading;
