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
    <div className="shadow-xl flex flex-col md:flex-row justify-between items-center px-4 w-full h-auto md:h-24">
      <div className="logo-container mb-4 md:mb-0 md:mr-4">
        <img
          className="px-2 translate-x-5"
          src={LOGO_URL}
          width={90}
          height={90}
          alt="company Logo"
        />
      </div>
      <div className="location_tracker flex flex-col md:flex-row md:items-center mb-4 md:mb-0 md:mr-4">
        <span className="font-mono cursor-pointer hover:text-orange-500 md:mr-2">
          Vadakara
        </span>
        <span className="text-slate-300 cursor-pointer md:mr-2">
          {truncate(
            "17, Kozhikode - Palakkad Hwy, Polpaya Mana, Tazhekkod, Kozhikode, Kerala 673004, India"
          )}
        </span>
        <span className="cursor-pointer stroke-cyan-500 hover:text-orange-500 md:mr-2">
          {DOWN_ARROW_SVG}
        </span>
      </div>
      <div className="navItems flex flex-col md:flex-row md:items-center md:flex-col lg:flex-row">
        <ul className="flex flex-col md:flex-row gap-6">
          <li className="flex flex-row font-mono items-center p-2 md:p-6 hover:text-orange-500">
            <CiSearch className="mr-2 md:mr-0" />
            Search
          </li>
          <li className="flex flex-row font-mono items-center p-2 md:p-6 hover:text-orange-500">
            Home
          </li>
          <li className="flex flex-row font-mono items-center p-2 md:p-6 hover:text-orange-500">
            <BiSolidOffer className="mr-2 md:mr-0" />
            Offers
          </li>
          <li className="flex flex-row font-mono items-center p-2 md:p-6 hover:text-orange-500">
            <CiUser className="mr-2 md:mr-0" />
            Adith GS
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
