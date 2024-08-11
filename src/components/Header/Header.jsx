import UpperBar from './UpperBar/UpperBar';
import LowerBar from './LowerBar/LowerBar';

const Header = () => {
  return (
    <header className="w-full fixed left-0 drop-shadow-md z-50">
      <UpperBar />
      <LowerBar />
    </header>
  );
};

export default Header;
