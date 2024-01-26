import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import { DOWN_ARROW_SVG } from "../utils/common";
import Shimmer from "./Shimmer";
import { CiSearch } from "react-icons/ci";

// import RestoCardComponent from "./RestoCardComponent";
const Body = () => {
  // function truncate(str)  {
  //     return str.length > 10 ? str.substring(0,25) + "..." : str;
  // }
  const [restListArray, setRestListArray] = useState([])
  let [filteredRestArray, setFileterdRestArray] = useState([])
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const restListJson = await data.json()
    setRestListArray(restListJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(restListArray)
    setFileterdRestArray(restListJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(restListArray)
  }

  return restListArray.length === 0 ? (<Shimmer />) : (
    <div className=" flex flex-col w-full mx-8">
      <div className="search">
        <div className="flex flex-row mx-3 my-3">
          <label className="relative block w-96 flex flex-row">
            <span className="sr-only">Search</span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for restaurants..." type="text" name="search"
              value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
              }} />
              <button className="w-48 text-slate-600" onClick={()=>{
                console.log("Click")
                filteredRestArray = restListArray.filter((ele) =>{
                  ele.info.name.toLowerCase().includes(searchText.toLowerCase())
                })
              }}> Search</button>
          </label>

        </div>
      </div>
      {/* <div className="filter">
        <button onClick={()=>{ 
          console.log("Onclicked")
          const fiterRest = restListArray.filter((rest)=>{
          rest.info.avgRating > 4
        })
        setRestListArray(fiterRest)
       }} > Top Rated</button>

      </div> */}
      <div className="flex flex-row space-x-4  flex-wrap">
        {
          filteredRestArray?.map((rest) => (<RestaurantCards key={rest.info.id} resName={rest.info.name} cuisine={rest.info.cuisines} restImage={rest.info.restImage} restRating={rest.info.avgRating} estDelivery={rest.info.sla.deliveryTime} />))
        }
      </div>
    </div>
  );
};
export default Body;