import HeartIcon from "../../../assets/icons/HeartIcon";
import UserIcon from "../../../assets/icons/UserIcon";

const IconTextButtons = () => {
  return (
    <div className="flex space-x-4 text-sm">
      <button className="flex items-center space-x-1">
        <span>ACCOUNT</span>
        <span className="flex w-[18px]">
          <UserIcon />
        </span>
      </button>
      <button className="flex items-center space-x-1 ">
        <span>WISHLIST</span>
        <span className="text-red-600 flex w-[18px]">
          <HeartIcon />
        </span>
      </button>
    </div>
  );
};

export default IconTextButtons;
