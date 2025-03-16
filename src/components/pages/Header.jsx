import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute px-10 w-full py-2 bg-gradient-to-b from-black z-20 ">
      <img src={NETFLIX_LOGO_URL} alt="logo_url" className="w-56 " />
    </div>
  );
};

export default Header;
