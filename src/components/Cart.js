import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

import ItemList from "./itemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleclearcart = () => {
    alert("cart clear");
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <div>
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleclearcart}
        >
          Clear cart
        </button>
        {cartItems.length === 0 && (
          <div className="flex justify-center">
            <img
              src={
                "https://img.freepik.com/free-vector/male-chef-mixing-flour-eggs-dough-with-whisk-hands-happy-man-apron-preparing-homemade-sweet-dessert-table-home-kitchen-flat-vector-illustration-pastry-cooking-recipe-concept_74855-21965.jpg"
              }
            />
          </div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
