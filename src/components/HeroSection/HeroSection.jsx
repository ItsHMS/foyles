import { useState } from "react";
import TabSlider from "../common/TabSlider";
import NotificationBar from "../common/NotificationBar"; // Import the new component
import "../../styles/hero/hero.css";
import HeroImage1 from "../../assets/images/hero/hero.png";
import HeroImage2 from "../../assets/images/hero/hero2.jpeg";
import HeroImage3 from "../../assets/images/hero/hero3.jpeg";
import HeroImage4 from "../../assets/images/hero/hero4.jpeg";

const heroSlides = [
  {
    image: HeroImage1,
    altText: "First slide description",
  },
  {
    image: HeroImage2,
    altText: "Second slide description",
  },
  {
    image: HeroImage3,
    altText: "Third slide description",
  },
  {
    image: HeroImage4,
    altText: "Fourth slide description",
  },
];

const HeroSection = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleImageClick = () => {
    setNotificationOpen(true);
  };

  const closeNotification = () => {
    setNotificationOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero-slider-container">
      <TabSlider settings={settings}>
        {heroSlides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.image}
              alt={slide.altText}
              className="w-full h-auto object-cover cursor-pointer"
              onClick={handleImageClick}
            />
          </div>
        ))}
      </TabSlider>

      {notificationOpen && (
        <NotificationBar
          message={
            <div className="flex justify-center items-center gap-3 w-full">
              <div>New Arrivals: Discover the Latest Bestsellers and Exclusive Titles Today</div>
            </div>
          }
          onClose={closeNotification}
        />
      )}
    </div>
  );
};

export default HeroSection;
