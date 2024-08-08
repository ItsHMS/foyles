import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ className, onClick, direction }) => (
    <button
        className={`${className} slick-${direction} bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full absolute z-10 ${direction === 'prev' ? 'left-0' : 'right-0'}`}
        onClick={onClick}
        aria-label={`${direction} arrow`}
    >
        {direction === 'prev' ? '←' : '→'}
    </button>
);

CustomArrow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    direction: PropTypes.oneOf(['prev', 'next']).isRequired,
};

const TabSlider = ({ children, settings }) => {
    const childCount = React.Children.count(children);

    const defaultSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: childCount > 1,
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ],
    };

    const mergedSettings = { ...defaultSettings, ...settings };

    return (
        <div className="relative">
            <Slider {...mergedSettings} className="px-8">
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