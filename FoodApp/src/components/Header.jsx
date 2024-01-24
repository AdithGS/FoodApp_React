import { LOGO_URL } from "../utils/common";
import { CiUser } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { DOWN_ARROW_SVG } from "../utils/common";

function truncate(str) {
  return str.length > 10 ? str.substring(0, 25) + "..." : str;
}
const Header = () => {

  return (
    <div className=" shadow-xl flex flex-row justify-between items-center px-4 w-full  h-24">
      <div className="logo-container">
        <img
          className="px-2 translate-x-5"
          src={LOGO_URL}
          width={90}
          height={90}
          alt="company Logo"
        />
      </div>
      <div className="location_tracker">
        <div className="location flex flex-row gap-x-2">
          <span className="font-mono cursor-pointer hover:text-orange-500 ">Vadakara</span>
          <span className="text-slate-300 cursor-pointer">
            {truncate("17, Kozhikode - Palakkad Hwy, Polpaya Mana, Tazhekkod, Kozhikode, Kerala 673004, India")}
          </span>
          <span className="cursor-pointer stroke-cyan-500">
            {DOWN_ARROW_SVG}
          </span>
        </div>
      </div>

      <div className="navItems">
        <ul className="flex-row flex  gap-6">
          <li className="flex  flex-row font-mono items-center p-6 hover:text-orange-500 "> <CiSearch />Search</li>
          <li className="font-mono items-center p-6 hover:text-orange-500">Home</li>
          <li className="flex flex-row font-mono items-center p-6 hover:text-orange-500"><BiSolidOffer />Offers</li>
          <li className="flex flex-row font-mono items-center p-6 hover:text-orange-500"><CiUser />Adith GS </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
