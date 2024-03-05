import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  // console.log(props);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* <img src={IMG_CDN_URL + cloudinaryImageId} /> */}
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      {/* <h2>{restrautList[0]?.data.name}</h2> */}
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
