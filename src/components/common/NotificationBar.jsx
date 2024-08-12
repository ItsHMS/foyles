import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const NotificationBar = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 
        bg-[#FF3D3D] text-white
        p-3 flex justify-center items-center
        transition-all duration-300 ease-in-out 
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }
        z-50
      `}
    >
      <span>{message}</span>
      <button
        onClick={handleClose}
        className="bg-transparent border-none absolute right-4 text-white text-2xl cursor-pointer focus:outline-none"
      >
        ×
      </button>
    </div>
  );
};
NotificationBar.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.object,
};
export default NotificationBar;
