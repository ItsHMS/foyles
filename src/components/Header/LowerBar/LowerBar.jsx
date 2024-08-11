import NavLinks from './NavLinks';
import FreeDeliveryText from './FreeDeliveryText';

const LowerBar = () => {
  return (
    <div className="w-full bg-white pb-2">
      <NavLinks />
      <FreeDeliveryText />
    </div>
  );
};

export default LowerBar;
