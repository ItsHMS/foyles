import PropTypes from "prop-types";
import TabSlider from "../common/TabSlider";
import IconComp from "../common/IconComp";

const IconSlider = ({ iconsData }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    // You can uncomment and adjust the responsive settings as needed
    // responsive: [
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 6,
    //             slidesToScroll: 1,
    //         }
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 4,
    //             slidesToScroll: 1,
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //         }
    //     }
    // ]
  };

  return (
    <div className="p-4">
      <TabSlider settings={settings}>
        {iconsData.map((icon) => (
          <div key={icon.id} className="pr-4">
            <IconComp icon={icon.img} text={icon.text} />
          </div>
        ))}
      </TabSlider>
    </div>
  );
};

IconSlider.propTypes = {
  iconsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default IconSlider;
