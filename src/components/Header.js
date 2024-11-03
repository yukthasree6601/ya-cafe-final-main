import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/Usercontext.js";
import { useSelector } from "react-redux";
import { FaWifi } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaShoppingCart,
  FaStore,
} from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import LOGO from "../../logo.jpg";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlinestatus = useOnlineStatus();

  // Fetching cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="logo-container flex items-center justify-center">
          <Link to="/">
            <img className="size-48 h-auto" src={LOGO} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 items-center text-gray-700 font-bold">
          <li>
            <Link
              to="/home"
              className="flex items-center space-x-2 text-lg font-semibold text-gray-700 hover:text-orange-500 hover:underline underline-offset-4 transition duration-300 ease-in-out"
            >
              <FaHome className="text-2xl" />
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="flex items-center space-x-2 text-lg font-semibold text-gray-700 hover:text-orange-500 hover:underline underline-offset-4 transition duration-300 ease-in-out"
            >
              <FaInfoCircle className="text-2xl" />
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-lg font-semibold text-gray-700 hover:text-orange-500 hover:underline underline-offset-4 transition duration-300 ease-in-out"
            >
              <FaPhone className="text-2xl" />
              <span>Contact</span>
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className="flex items-center space-x-2 text-lg font-semibold text-gray-700 hover:text-orange-500 hover:underline underline-offset-4 transition duration-300 ease-in-out"
            >
              <FaShoppingCart className="text-2xl" />
              <span>Cart</span>
            </Link>
          </li>
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition duration-300"
              onClick={() =>
                setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
              }
            >
              {btnNameReact === "Login" ? (
                <FiLogIn className="mr-2 text-lg" />
              ) : (
                <FiLogOut className="mr-2 text-lg" />
              )}
              {btnNameReact}
            </button>

            {/* Displaying logged-in user */}
            {/* <span className="text-gray-700 font-medium">{loggedInUser}</span> */}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
