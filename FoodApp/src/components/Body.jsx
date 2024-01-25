import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import { DOWN_ARROW_SVG } from "../utils/common";
import Shimmer from "./Shimmer";
// import RestoCardComponent from "./RestoCardComponent";
const Body = () => {
  // function truncate(str)  {
  //     return str.length > 10 ? str.substring(0,25) + "..." : str;
  // }
  const [restListArray, setRestListArray] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const restListJson = await data.json()
    setRestListArray(restListJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  if(restListArray.length === 0){
    return <Shimmer/>
  }
  
  return (
    <div className="flex flex-col w-full mx-8">
      <div className="flex flex-row space-x-4  flex-wrap">
        {
          restListArray?.map((rest) => (<RestaurantCards key={rest.info.id} resName={rest.info.name} cuisine={rest.info.cuisines} restImage={rest.info.restImage} />))
        }
      </div>
    </div>
  );
};
export default Body;