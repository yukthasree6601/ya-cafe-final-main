import React from "react";
import { Link } from "react-router-dom";
import wip from "../../wip.gif";

const Signin = () => {
  return (
    <div className="flex flex-col justify-center min-h-[80vh] items-center">
      <img src={wip} />
      <h1 className="text-[#53567E] text-lg font-semibold mt-5">
        Feature coming soon..
      </h1>
      <p className="text-sm text-center mt-1 font-normal">
        You can go to home page to view more restaurants
      </p>
      <Link to={"/"}>
        <button className=" mt-4 sm:mt-6 text-base border px-6 py-2 bg-[#FF5200] text-white font-bold">
          See Restaurants Near You
        </button>
      </Link>
    </div>
  );
};

export default Signin;
