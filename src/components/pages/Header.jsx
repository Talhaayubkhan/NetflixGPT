import { NETFLIX_LOGO_URL } from "../utils";

const Header = () => {
  return (
    <div className="absolute px-10 w-full py-2 bg-gradient-to-b from-black">
      <img src={NETFLIX_LOGO_URL} alt="logo_url" className="w-56 " />
    </div>
  );
};

export default Header;
