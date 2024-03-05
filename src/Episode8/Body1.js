// import { useEffect, useState } from "react";
// import { restrautList } from "../utils/constants";
// import RestaurantCard from "./RestaurantCard";

// function filterData(searchInput, restaurants){
//   const filterData = restaurants.filter((restaurant) => restaurant.info.name.includes(searchInput));
//   return filterData;
// }
// const Body = () => {
//     // let searchTxt = "KFC";
//     //searchTxt is a local state variable
//     const [restaurants, setRestaurants] = useState(restrautList);
//     const [searchInput, setSearchInput] = useState(); //To create state variable
//     const [listofRestaurants, setListofRestaurants] = useState();
    
//     useEffect(() => {
//       // console.log("UseEffect called");
//       fetchData();
//     }, []);

//     const fetchData = async () => {
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );
//     const json = await data.json();
//     console.log(json);
//     };

//   return (
//     <>
//     <div className="search-container">
//         <input type="text" className="search-input" placeholder="Search" value={searchInput} onChange={(e) => {
//         setSearchInput(e.target.value);
//         }}
//         />
//         {/* <h1>{searchClicked}</h1> */}
//         <button className="seacrh-btn"
//         onClick={() => {
//             //need to filter the data
//            const data = filterData(searchInput, restaurants);
//              //update the state -restaurants
//              setRestaurants(data);
//         }}>Search</button>
//     </div>
//       <div className="restaurant-list">
//         {restaurants.map((restaurant) => {
//           return (
//             <RestaurantCard
//               {...restaurant.info}
//               key={restaurant.info.id}
//             ></RestaurantCard>
//           );
//         })}
//         {/* <RestrauntCard /> */}
//       </div>
//     </>
//   );
// };

// export default Body;
