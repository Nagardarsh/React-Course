import { useEffect, useState } from "react";
// import { restrautList } from "../utils/constants";
// import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // let searchTxt = "KFC";
  //searchTxt is a local state variable
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState(""); //To create state variable

  //Whenever state variable update, react triggers a reconsiliation cycle(re-renders) the component
  console.log("Body rendered");

  useEffect(() => {
    // console.log("UseEffect called");
    fetchData();
  }, []);

  // data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  const fetchData = async () => {
    const data = await fetch(
      // https://corsproxy.io/?
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setListofRestaurant(json?.data?.cards[2]?.data?.data?.card?.gridElements?.infoWithStyle?.restaurants);
    // setListofRestaurant(
    //   json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(filteredRestaurant);
    console.log(listofRestaurants);
  };

  // if(listofRestaurants.length === 0) {
  //   // return <h1>Loading.......</h1>
  //   return <Shimmer/>
  // }

  return listofRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type=" text"
              className="search-box"
              value={searchTxt}
              onChange={(e) => {
                setSearchTxt(e.target.value);
              }}
            />
            <button
              onClick={() => {
                //Filter the restaurant cards and update the UI
                //SearchTxt
                console.log(searchTxt);
                const filteredRestaurant = listofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
                );
                setfilteredRestaurant(filteredRestaurant);
                console.log(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="res-container">
          {filteredRestaurant.map((restaurant) => {
            <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}>
              <RestaurantCard  resData={restaurant?.info} />;
            </Link>
            // console.log(restaurant.info.id);
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
