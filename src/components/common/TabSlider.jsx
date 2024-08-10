import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";

const CustomArrow = ({ className, onClick, direction, show }) => {
  if (!show) return null;
  
  return (
    <div
      className={`custom-arrow ${className} slick-${direction} bg-sisal-70 hover:bg-gray-700 text-white hover:text-white font-bold flex justify-center items-center rounded-full absolute z-10 ${
        direction === "prev" ? "left-0" : "right-0"
      }`}
      onClick={onClick}
      aria-label={`${direction} arrow`}
    >
      {direction === "prev" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </div>
  );
};

CustomArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(["prev", "next"]).isRequired,
  show: PropTypes.bool.isRequired,
};

const TabSlider = ({ children, settings }) => {
  const childCount = React.Children.count(children);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(false);
  const sliderRef = useRef(null);

  const updateArrows = () => {
    if (sliderRef.current) {
      const { currentSlide, slideCount } = sliderRef.current.innerSlider.state;
      const slidesToShow = sliderRef.current.props.slidesToShow;

      setShowPrevArrow(currentSlide > 0);
      setShowNextArrow(currentSlide < slideCount - slidesToShow);
    }
  };

  useEffect(() => {
    updateArrows();
  }, [children]);

  const defaultSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: childCount > 1,
    prevArrow: <CustomArrow direction="prev" show={showPrevArrow} />,
    nextArrow: <CustomArrow direction="next" show={showNextArrow} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      const slidesToShow = sliderRef.current.props.slidesToShow;
      setShowPrevArrow(next > 0);
      setShowNextArrow(next < childCount - slidesToShow);
    },
    afterChange: (current) => {
      updateArrows();
    },
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <div className="relative custom-slider-container">
      <Slider ref={sliderRef} {...mergedSettings}>
        {children}
      </Slider>
    </div>
  );
};

TabSlider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
};

export default TabSlider;