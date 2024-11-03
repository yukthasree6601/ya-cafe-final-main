import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { SWIGGY_URL } from "../utils/constants.js";
import { json, Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Usercontext from "../utils/Usercontext.js";
import Whatsonyourmind from "./whatsonyourmind.js";

import TopRated from "./TopRated.js";
// import FilterRestaurant from "./filteredRestaurant.js";

const Body = () => {
  const [listofrestaurants, setListofrestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [carouselData, setCarouselData] = useState(null);

  //  first we create a state for storing data
  const [topRatedData, setTopRatedData] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [allData, setAllData] = useState([]);

  const [lat, setLat] = useState(17.4065);
  const [lng, setLng] = useState(78.4772);

  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLng(coords.longitude);
        },
        (error) => {}
      );
    }
  };

  const handleLocationClick = (lat, lng) => {
    setLat(lat);
    setLng(lng);
  };

  useEffect(() => {
    fetchData();
  }, [lat, lng]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();

    setAllData(json?.data);
    console.log(allData);

    setListofrestaurants(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setCarouselData(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );

    setTopRatedData(
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  const onlinestatus = useOnlineStatus();
  if (!onlinestatus) {
    return (
      <h1>
        Looks like you are Offline! Please check your internet connection.
      </h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(Usercontext);

  return listofrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex flex-col items-center mt-10  ">
      {/* <div className="search m-4 p-6 flex items-center">
        <label>UserName:</label>
        <input
          className="border border-black p-2 ml-2"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div> */}
      <div className="flex gap-4  w-[80%]">
        <button
          onClick={() => getUserCoordinates()}
          className="px-6 py-3 rounded-md border text-lg font-semibold"
        >
          Your location{" "}
        </button>
        <button
          onClick={() => handleLocationClick(12.9715987, 77.5945627)}
          className="px-6 py-3 rounded-md border text-lg font-semibold"
        >
          Bangalore
        </button>
        <button
          onClick={() => handleLocationClick(19.076, 72.8777)}
          className="px-6 py-3 rounded-md border text-lg font-semibold"
        >
          Mumbai
        </button>
        <button
          onClick={() => handleLocationClick(28.6139, 77.2088)}
          className="px-6 py-3 rounded-md border text-lg font-semibold"
        >
          Delhi
        </button>
      </div>

      <Whatsonyourmind data={carouselData} />
      <TopRated data={topRatedData} dataT={allData} />

      <div className="mb-2  w-[80%] ">
        <h1 className="text-2xl sm:text-2xl font-bold text-black my-8 tracking-wide">
          Restaurants with online food delivery in Delhi
        </h1>

        <div className="filter">
          <div className="search my-4 py-4 flex gap-4">
            <input
              type="text"
              className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500 transition duration-300 ease-in-out"
              placeholder="Search for restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
              onClick={() => {
                const filteredList = listofrestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredRestaurant(filteredList);
              }}
            >
              Search
            </button>
            <button
              className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
              onClick={() => {
                console.log("clicked");
                const aboveFour = listofrestaurants.filter(
                  (restaurants) => restaurants.info.avgRating > 4.0
                );
                setfilteredRestaurant(aboveFour);
              }}
            >
              Above 4.0
            </button>
            <button
              className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
              onClick={() => {
                const aboveFourPointFive = listofrestaurants.filter(
                  (restaurants) => restaurants.info.avgRating >= 4.5
                );
                setfilteredRestaurant(aboveFourPointFive);
              }}
            >
              Above 4.5
            </button>

            {console.log(listofrestaurants)}
            {/* <FilterRestaurant /> */}
          </div>
        </div>
      </div>

      <div className="restro-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  w-[80%]">
        {filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((res) => (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              <RestaurantCard resData={res} />
            </Link>
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};

export default Body;
