import { useParams } from "react-router-dom";

import { CDN_URL } from "../utils/constants.js";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import Restaurantcategory from "./Restaurantcategory.js";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

import ShimmerofResCard from "./ShimmerofRescard.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantsMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ShimmerofResCard />;

  const {
    name,
    cuisines,
    costForTwo,
    cloudinaryImageId,
    locality,
    avgRating,
    discount,
    deliveryTime,
  } = resInfo?.cards[2]?.card?.card?.info || {};
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  {
    console.log("this is res", resInfo);
  }
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Restaurant Name and Info */}
      <div className="flex flex-col md:flex-row  shadow-lg rounded-lg overflow-hidden items-center px-5 gap-x-10">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full md:w-1/3 h-[230px] object-contain rounded-lg"
        />

        <div className="p-6 flex-1">
          <h1 className="text-4xl font-bold mb-2">{name}</h1>
          {/* <p className="text-lg">
          {cuisines?.join(", ")} • ₹{costForTwo / 100} for two
        </p> */}
          <p className="text-lg">🍴 Cuisines: {cuisines.join(", ")}</p>
          <p className="text-lg">🏢 Address: {locality}</p>
          <p className="text-lg">🪙 Cost for Two: {costForTwo / 100}</p>
          <p className="text-lg flex items-center gap-1">
            <FaStar className="inline bg-green-500 text-white px-1 rounded-full" />{" "}
            Average Rating: {avgRating}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-4 text-center">Menu</h2>
      </div>
    
      {/* Categories Accordion */}
      {categories.length > 0 ? (
        <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md divide-y divide-gray-200">
          {categories.map((category, index) => (
            <Restaurantcategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No categories available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
