import {useState, useEffect, Children } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);

    const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId
    
    );
    // "https://www.google-analytics.com/j/collect?v=1&_v=j101&a=23856714&t=pageview&_s=1&dl=https%3A%2F%2Fwww.swiggy.com%2Frestaurants%2Fburger-king-new-palasia-indore-indore-728301&dr=https%3A%2F%2Fsearch.yahoo.com%2F&ul=en-us&de=UTF-8&dt=Burger%20King%20%7C%20Home%20delivery%20%7C%20Order%20online%20%7C%20New%20Palasia%20Indore%20Indore&sd=24-bit&sr=1536x864&vp=630x713&je=0&_u=QACAAEABAAAAACAAI~&jid=&gjid=&cid=1018860648.1708691333&uid=0&tid=0&_gid=445338699.1708691333&_slc=1&gtm=45He42l0n81MJV7Q8Qv78036788za200&gcd=13l3l3l3l1&dma=0&z=251704098"
    const json = await data.json();

    // console.log(json);
    setresInfo(json.data);
  };

  if(resInfo === null) return <Shimmer/>;

 const {name, cuisines, costForTwoMessage} = 
   resInfo?.cards[0]?.card?.card?.info;

   const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   console.log(itemCards);

  return (
    <div className="menu">
      {/* <h1> Nmae of the Restaurant</h1>
       */}
       <h1>{name}</h1>
       <h2>{cuisines.join(", ")}</h2>
       <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map(item => <li key={""}>{item.card.info.name}</li>)}
        {/* <li>{itemCards[0].card.info.name}</li> */}
        <li>Biryani</li>
        <li>Burger</li>
        <li>Toke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
