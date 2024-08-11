import ExpansionPanel from "./ExpansionPanel";
import SocialIcons from "./SocialIcons";
import IconTextButtons from "./IconTextButtons";
import SearchBar from "./SearchBar";

import siteLogo from "../../../assets/images/header/site-logo.png";
import BasketIcon from "../../../assets/icons/BasketIcon";

const TopSection = () => (
  <div className="flex justify-end items-start">
    <ExpansionPanel />
    <SocialIcons />
  </div>
);

const Logo = () => (
  <div className="flex justify-center w-full">
    <img src={siteLogo} alt="Logo" className="w-full h-12" />
  </div>
);

const Basket = () => (
  <div className="flex flex-col items-center">
    <BasketIcon />
    <p className="text-xs">BASKET</p>
  </div>
);

const BottomSection = () => (
  <div className="flex justify-around items-center mt-10 max-w-[1200px] mx-auto">
    <div className="w-full">
      <IconTextButtons />
    </div>
    <Logo />
    <div className="w-full flex gap-3">
      <SearchBar />
      <Basket />
    </div>
  </div>
);

const UpperBar = () => {
  return (
    <div className="w-full bg-wild-sand p-4">
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default UpperBar;