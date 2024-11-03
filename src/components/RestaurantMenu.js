import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import Restaurantcategory from "./Restaurantcategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantsMenu(resId);
  const [showIndex, setShowIndex] = useState(null); // Initialize as null for no category being shown

  if (resInfo === null) return <Shimmer />;

  // Destructure restaurant info safely
  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info || {};

  // Filter categories safely
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <h3 className="font-bold my-10 text-lg">
        {cuisines?.join(", ")} - ₹{costForTwo / 100}
      </h3>
      {/* Categories accordion */}
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <Restaurantcategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex} // Show items if the index matches
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)} // Toggle between open and close
          />
        ))
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;


