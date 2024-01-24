import { REST_IMG } from "../utlis/common";
const RestaurantCards = (props) => {
    return (
      <div className="grid   w-48 justify-items-center transition-transform transform pb-2 mt-2 hover:scale-95 cursor-pointer ">
        <div >
          <img className="w-full h-90" src={REST_IMG} alt="rest_logo" />
        </div>
        <div>
        <h3 className="text-slate-950 uppercase font-mono text-xl font-bold">{props.resName}</h3>
        <h4 className="text-slate-500 lowercase font-mono text-sm font-light">4.5 Stars . 38 minutes </h4>
        <h4 className="text-gray-400 normal-case font-mono text-sm font-light">{props.cuisine}</h4>
        </div>
        
      </div>
    );
  };
  export default RestaurantCards;
  