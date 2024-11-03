import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constants.js";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  // Modified handleAddClick to accept the item parameter
  const handleAddClick = (item) => {
    dispatch(addToCart(item)); // Dispatches the item to the cart
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 mb-6 border-b border-gray-200 flex justify-between items-start bg-white hover:bg-gray-50 transition-all duration-200"
        >
          {/* Item Information */}
          <div className="w-9/12 pr-4">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {item.card.info.name}
            </h3>
            <span className="text-sm font-medium text-gray-600">
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>

            <p className="text-sm text-gray-500 mt-1">
              {item.card.info.description}
            </p>
          </div>

          {/* Item Image and Button */}
          <div className="w-3/12 flex flex-col items-center relative">
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-20 object-cover rounded-md mb-2"
              />
            )}
            <button
              className="p-2 text-sm font-medium border border-gray-300 rounded-md bg-white hover:bg-gray-100 w-20"
              onClick={() => handleAddClick(item)} // Pass item to handleAddClick
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
