
import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopRated = ({ data }) => {
  const settings = {
    dots: false,
    arrows: true,
    mouseScroll: false,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, // Adjust to scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024, // For large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, // Scroll one slide at a time
          dots: false,
        },
      },
      {
        breakpoint: 800, // For medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, // Scroll one slide at a time
          dots: false,
        },
      },
      {
        breakpoint: 480, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Scroll one slide at a time
          dots: false,
        },
      },
      {
        breakpoint: 280, // For extra small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Scroll one slide at a time
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container  border-gray-100 border-b-2  pb-3 lg:pb-10 mx-4 sm:mx-0  ">
    <Slider {...settings}>
    {data.map((item) => (
      <div key={item?.info?.id}>
        <Link to={"/restaurants/"+ item?.info?.id}>
          <div className="mx-4">
            <RestaurantCard resData={item} />
          </div>
        </Link>
      </div>
    ))}
      </Slider>
  </div>
  )
};

export default TopRated;
