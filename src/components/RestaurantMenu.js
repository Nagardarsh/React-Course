// import { useState, useEffect, Children } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; //useSearchParams
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();
  // const dummy ="Dummy data";

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId
  //     // "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.960059122809971&lng=77.57337538383284"
  //     // "https://www.google-analytics.com/j/collect?v=1&_v=j101&a=23856714&t=pageview&_s=1&dl=https%3A%2F%2Fwww.swiggy.com%2Frestaurants%2Fburger-king-new-palasia-indore-indore-728301&dr=https%3A%2F%2Fsearch.yahoo.com%2F&ul=en-us&de=UTF-8&dt=Burger%20King%20%7C%20Home%20delivery%20%7C%20Order%20online%20%7C%20New%20Palasia%20Indore%20Indore&sd=24-bit&sr=1536x864&vp=630x713&je=0&_u=QACAAEABAAAAACAAI~&jid=&gjid=&cid=1018860648.1708691333&uid=0&tid=0&_gid=445338699.1708691333&_slc=1&gtm=45He42l0n81MJV7Q8Qv78036788za200&gcd=13l3l3l3l1&dma=0&z=251704098"
  //   );
  //   // "https://www.google-analytics.com/j/collect?v=1&_v=j101&a=23856714&t=pageview&_s=1&dl=https%3A%2F%2Fwww.swiggy.com%2Frestaurants%2Fburger-king-new-palasia-indore-indore-728301&dr=https%3A%2F%2Fsearch.yahoo.com%2F&ul=en-us&de=UTF-8&dt=Burger%20King%20%7C%20Home%20delivery%20%7C%20Order%20online%20%7C%20New%20Palasia%20Indore%20Indore&sd=24-bit&sr=1536x864&vp=630x713&je=0&_u=QACAAEABAAAAACAAI~&jid=&gjid=&cid=1018860648.1708691333&uid=0&tid=0&_gid=445338699.1708691333&_slc=1&gtm=45He42l0n81MJV7Q8Qv78036788za200&gcd=13l3l3l3l1&dma=0&z=251704098"
  //   const json = await data.json();

  //   console.log(json);
  //   setresInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, avgRating, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log(itemCards);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(catagories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">1{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* catagories accordian */}
      {categories.map((category, index) => (
        //Controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
