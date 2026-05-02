import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //  Props is the object creacted which will have all the items passed
  //  {resName, cuisine, ratings, eta} = props we can also destructure and use directly without props.

  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="restaurant-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
