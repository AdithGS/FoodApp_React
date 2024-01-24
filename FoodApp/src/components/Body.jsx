import RestaurantCards from "./RestaurantCards";
// import { DOWN_ARROW_SVG } from "../utlis/common";
// import RestoCardComponent from "./RestoCardComponent";
const Body = () => {
    // function truncate(str)  {
    //     return str.length > 10 ? str.substring(0,25) + "..." : str;
    // }
    return (
      <div className="flex flex-col w-full ">
        {/* <div className="location flex flex-row gap-x-2">
        <span className="font-mono cursor-pointer hover:text-red-500 ">Vadakara</span>
        <span className="text-slate-300 cursor-pointer">
        {truncate("17, Kozhikode - Palakkad Hwy, Polpaya Mana, Tazhekkod, Kozhikode, Kerala 673004, India")}
        </span>
        <span className="cursor-pointer stroke-cyan-500">
          {DOWN_ARROW_SVG}
        </span>
      </div> */}
        <div className="flex flex-row space-x-4  flex-wrap">
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
          <RestaurantCards resName="Alpic Foods" cuisine="Biriyani,North Indian,Asia"/>
        </div>
      </div>
    );
  };
  export default Body;