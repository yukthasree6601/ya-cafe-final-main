import React from "react";
import ItemList from "./itemList.js";

const RestaurantCategory = ({ data, showItems, setShowIndex, currentIndex }) => {
  // Toggle showItems by checking if the current index matches the passed index
  const handleClicked = () => {
    setShowIndex(currentIndex === data.index ? null : data.index); // Toggle the index
  };

  return (
    <div className="max-w-3xl mx-auto my-6">
      {/* Category Header */}
      <div className="bg-gray-50 p-4 shadow-md rounded-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClicked}
        >
          <span className="font-semibold text-xl text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <button className="text-lg font-medium text-gray-500 hover:text-gray-700 transition-all duration-200">
            {showItems ? "⬆" : "⬇"}
          </button>
        </div>
      </div>

      {/* Accordion Body */}
      {showItems && (
        <div className="mt-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;

