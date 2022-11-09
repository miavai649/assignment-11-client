import React from "react";
import img1 from "../../../assets/slider/img1.jpg";
import img2 from "../../../assets/slider/img2.jpg";
import img3 from "../../../assets/slider/img3.jpg";
import img4 from "../../../assets/slider/img4.jpg";
import img5 from "../../../assets/slider/img5.jpg";
import BannerItem from "../BannerItem/BannerItem";

const Banner = () => {
  const sliderData = [
    {
      image: img1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-3/5 mx-auto rounded-lg my-7">
      {sliderData.map((slider) => (
        <BannerItem key={slider.id} slider={slider}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
