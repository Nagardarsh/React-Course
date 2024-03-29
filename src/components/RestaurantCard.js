import UserContext from "../utils/UserContext";
import { IMG_CDN_URL } from "../utils/constants";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    sla,
  } = resData?.info;
  // console.log(props);
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      {/* <img src={IMG_CDN_URL + cloudinaryImageId} /> */}
      <img
        className="rounded-lg"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      {/* <h2>{restrautList[0]?.data.name}</h2> */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} MINUTES</h4>
      {/* <h4>{sla?.slaString}</h4> */}
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

//Higher order component
//input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLevel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
