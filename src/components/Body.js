import { useEffect, useState, useContext } from "react";
// import { restrautList } from "../utils/constants";
// import { resList } from "../utils/mockData";
import RestaurantCard, { withPromotedLevel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // let searchTxt = "KFC";
  //searchTxt is a local state variable
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState(""); //To create state variable

  const RestaurantCardPromoted = withPromotedLevel(RestaurantCard);

  //Whenever state variable update, react triggers a reconsiliation cycle(re-renders) the component
  // console.log("Body rendered",listofRestaurants);

  useEffect(() => {
    // console.log("UseEffect called");
    fetchData();
  }, []);

  // data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  const fetchData = async () => {
    const data = await fetch(
      // https://corsproxy.io/?
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setListofRestaurant(json?.data?.cards[2]?.data?.data?.card?.gridElements?.infoWithStyle?.restaurants);
    setListofRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(filteredRestaurant);
    // console.log(listofRestaurants);
  };

  //Hook
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks Like you're offline!! Please check your internet connection.
      </h1>
    );
  if (listofRestaurants.length === 0) {
    // return <h1>Loading.......</h1>
    return <Shimmer />;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input
              type=" text"
              className="border border-solid border-black"
              value={searchTxt}
              onChange={(e) => {
                setSearchTxt(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                //Filter the restaurant cards and update the UI
                //SearchTxt
                // console.log(searchTxt);
                const filteredRestaurant = listofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
                // console.log(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>

          <div className="search m-4 p-4 flex items-center rounded-lg">
            <button
              className="px-4 py-2 bg-gray-100"
              onClick={() => {
                const filteredList = listofRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setListofRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center rounded-lg">
            <label>UserName: </label>
            <input
              className="border border-black p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info.id}
              to={"/restaurants/" + restaurant?.info.id}
            >
              {/* if the restauarant is promoted then add a promoter label to it */}
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}

              {/* <RestaurantCard key={restaurant.info.id} resData={restaurant}/> */}
            </Link>
            // console.log(restaurant.info.id);
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
