import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

const SnackbarAlert = ({ isOpen, onClose, className, children }) => {
  const snackbarRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const snackbar = snackbarRef.current;
    if (isOpen) {
      snackbar.style.transform = 'translateX(-50%)';
      snackbar.style.opacity = '1';
      
      timerRef.current = setTimeout(() => {
        onClose();
      }, 2000);
    } else {
      snackbar.style.transform = 'translateX(100%)';
      snackbar.style.opacity = '0';
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={snackbarRef}
      className={`fixed bottom-[40%] right-[25%] z-50 transition-all duration-300 ease-in-out ${className}`}
      style={{
        transform: 'translateX(100%)',
        opacity: 0,
      }}
    >
      <div className="flex items-center">
        {children}
        <button
          onClick={onClose}
          className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

SnackbarAlert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string, 
};

export default SnackbarAlert;