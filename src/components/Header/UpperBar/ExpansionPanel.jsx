import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ChevronTopIcon from "../../../assets/icons/ChevronTopIcon";
import FoyaltyImage from "../../../assets/images/header/loyalty.png";

const ExpansionPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("auto");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border bg-ecru-white rounded-t-none rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out fixed left-0 top-0 ml-8 z-[999] max-w-sm">
      <header
        className=" p-2 flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <img src={FoyaltyImage} alt="Foyalty" className="h-6" />
        <div className="flex">
          <button className="bg-mine-shaft text-white px-2 py-1 text-xs mr-2 rounded">
            JOIN / SIGN IN
          </button>
          <div
            className={`transform transition-transform duration-300 ${
              isOpen ? "" : "rotate-180"
            }`}
          >
            <ChevronTopIcon />
          </div>
        </div>
      </header>

      <main
        ref={contentRef}
        className="transition-all duration-300 ease-out"
        style={{ maxHeight: isOpen ? contentHeight : "0px" }}
      >
        <div className="p-4">
          <h2 className="text-xl text-center my-4">Welcome to Foyalty</h2>

          <div className="flex gap-2 mb-4">
            <FeatureItem
              image="https://cdn.foyles.co.uk/assets/foyles_loyalty_1.svg"
              text="Earn a Foyalty Stamp for every £10 you spend in our shops or online"
            />
            <FeatureItem
              image="https://cdn.foyles.co.uk/assets/foyles_loyalty_2.svg"
              text="Every 10 Foyalty Stamps you earn adds £10 to your Foyalty Balance"
            />
            <FeatureItem
              image="https://cdn.foyles.co.uk/assets/foyles_loyalty_3.svg"
              text="Spend your Foyalty Balance in our shops or online, with no minimum redemption*"
            />
          </div>

          <p className="text-sm pb-2 font-semibold">
            Enter your email to get your card or to sign in
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
            />
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>I am a student</span>
            </label>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-mine-shaft block flex-1 text-white p-2 rounded"
              >
                JOIN
              </button>
              <button
                type="submit"
                className="bg-mine-shaft block flex-1 text-white p-2 rounded"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

const FeatureItem = ({ image, text }) => (
  <div className="flex flex-col items-center space-x-4">
    <img src={image} alt="" className="w-14 h-14" />
    <p className="text-xs text-center">{text}</p>
  </div>
);
FeatureItem.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
};

export default ExpansionPanel;
