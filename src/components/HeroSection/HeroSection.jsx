import { useState } from "react";
import TabSlider from "../common/TabSlider";
import SnackbarAlert from "../common/SnackbarAlert";
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleImageClick = () => {
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
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

      <SnackbarAlert
        isOpen={snackbarOpen}
        onClose={closeSnackbar}
        className="bg-white px-8 py-7  rounded-xl flex gap-3 items-center"
      >
        <div className="bg-[#FF3D3D] rounded-xl px-7 py-3 mr-3">
          <div className="text-white">F</div>
        </div>
        <div className="text-black">
          <div className="font-semibold text-2xl pb-1">Great News!</div>
          <div>Your Order has been shipped.</div>
        </div>
      </SnackbarAlert>
    </div>
  );
};

export default HeroSection;
