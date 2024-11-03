import React from "react";
import Slider from "react-slick";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AwesomeSlider from "react-awesome-slider";

const TopRated = ({ data, dataT }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "white",
          right: "10px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }
  console.log("data is ", data);

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "white",
          left: "10px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  // const settings = {
  //   dots: false,
  //   arrows: true,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   draggable: false, // instead of mouseScroll
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: false,
  //         arrows: false, // Disable arrows for smaller screens if desired
  //       },
  //     },
  //     {
  //       breakpoint: 280,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: false,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // };
  // const id = 1;

  return (
    <div>
      <h1>Top Rated Restaurants</h1>

      <div
        className="slide
      r-containe border-gray-100 border-b-2 pb-3 lg:pb-10 mx-4 sm:mx-0"
      >
        {/* <h1>Restro </h1> */}
        <AwesomeSlider animation="cubeAnimation">
          {data.map((item) => (
            <div key={item?.info?.id}>
              <Link to={`/restaurant/${item?.info?.id}`}>
                <div className="mx-4 w-[300px]">
                  <RestaurantCard resData={item} />
                </div>
              </Link>
            </div>
          ))}
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default TopRated;
