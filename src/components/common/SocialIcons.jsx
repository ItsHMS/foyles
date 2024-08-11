import FacebookIcon from '../../assets/images/socials/icon-facebook.png';
import InstagramIcon from '../../assets/images/socials/icon-instagram.png';
import XIcon from '../../assets/images/socials/icon-x.png';
const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <a href="#facebook" className="text-blue-600">
        <img src={FacebookIcon} alt="Facebook" className="w-10 h-10" />
      </a>
      <a href="#twitter" className="text-blue-400">
        <img src={XIcon} alt="Twitter" className="w-10 h-10" />
      </a>
      <a href="#instagram" className="text-pink-600">
        <img src={InstagramIcon} alt="Instagram" className="w-10 h-10" />
      </a>
    </div>
  );
};

export default SocialIcons;
