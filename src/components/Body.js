import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterdList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // It is use to reload/re-render somethings after UI rendering is complead
  useEffect(() => {
    fetchData(); // To fetch the data after view is loaded
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredList(restaurants);
  };

  const isUserOnline = useOnlineStatus();

  if (!isUserOnline) {
    return (
      <div>
        <h1>You are offline, Check your internet connection</h1>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-2 p-2">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 cursor-pointer rounded-lg"
            onClick={() => {
              const filteredListOfRestaurants = listOfRestaurants.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
              );
              setFilteredList(filteredListOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-2 p-2">
          <button
            className="px-4 py-2 m-4 bg-gray-100 cursor-pointer rounded-lg"
            onClick={() => {
              // filter Restaurants with more than 4 rating
              const filtered = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5,
              );
              console.log(filtered);
              setFilteredList(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterdList.map((restaurant) => (
          <Link
            className="res-link"
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

// function getListData =

export default Body;
