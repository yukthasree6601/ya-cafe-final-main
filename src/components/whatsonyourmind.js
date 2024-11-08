import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Whatsonyourmind = ({ data }) => {
  console.log(data);

  const settings = {
    dots: false,
    bool: true,
    arrows: false,

    infinite: true,
    speed: 500,
    slidesToShow: 8,

    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,

          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,

          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,

          initialSlide: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 2,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="w-[80%]  ">
      <h1 className="text-xl sm:text-2xl font-bold text-black my-8 tracking-wide">
        Inspiration for your first order
      </h1>

      <Slider {...settings}>
        {data.map((item) => (
          <>
            <div key={item.id}>
              <img
                className=" w-[124px] h-[160px] md:w-[144px] md:h-[180px]  hover:scale-105 mb-16"
                src={CDN_URL + item.imageId}
                alt={item.description}
              />
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Whatsonyourmind;
