
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constants.js";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 flex justify-between items-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Item Information */}
          <div className="w-8/12">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {item.card.info.name}
            </h3>
            <span className="text-md font-medium text-gray-700">
              ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </span>
            <p className="text-sm text-gray-500 mt-1">
              {item.card.info.description}
            </p>
          </div>

          {/* Item Image and Button */}
          <div className="w-3/12 flex flex-col items-center">
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-24 object-cover rounded-md mb-3"
              />
            )}
            <button
              className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200 shadow-md hover:shadow-lg"
              onClick={() => handleAddClick(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
