import { REST_IMG } from "../utils/common";
import { MdStars } from "react-icons/md";
const RestaurantCards = (props) => {
  return (
    <div className="flex flex-col border border-gray-300 mx-3 my-3 rounded-lg shadow-md overflow-hidden w-64">
      <div className="p-4">
        <img
          className="w-32 h-28 object-cover"
          src={REST_IMG}
          // src={props.restImage}
          alt="Restaurant Logo"
        />
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-900">{props.resName}</h3>
        <h4 className="text-sm font-light text-gray-600">
          <span className=" flex flex-row gap-x-2 text-slate-800 font-mono"><MdStars/>4.5. 38 minutes</span>
        </h4>
        <h4 className="text-sm font-light text-gray-400">{props.cuisine.join(", ")}</h4>
      </div>
    </div>
  );
};
export default RestaurantCards;
