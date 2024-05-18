import { LOGO_URL } from "../utils/constant";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-[8%] py-1 z-[100] absolute w-full">
      <div className="w-48">
        <img src={LOGO_URL} alt="logo" className="w-full" />
      </div>
    </div>
  );
};

export default NavBar;
