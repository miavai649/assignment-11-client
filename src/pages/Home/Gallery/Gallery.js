import React from "react";
import img1 from "../../../assets/gallary/gallary1.jpg";
import img2 from "../../../assets/gallary/gallary2.jpg";
import img3 from "../../../assets/gallary/gallary3.jpg";

const Gallery = () => {
  return (
    <div className="my-28">
        <h2 className="text-center text-purple-500 text-5xl mb-10">Gallery</h2>
      <div className="container mx-auto grid grid-cols-3">
        <div className="w-96 image-full">
          <figure>
            <img className="rounded-xl" src={img1} alt="Shoes" />
          </figure>
        </div>
        <div className="w-96 image-full">
          <figure>
            <img className="rounded-xl" src={img2} alt="Shoes" />
          </figure>
        </div>
        <div className="w-96 image-full">
          <figure>
            <img className="rounded-xl" src={img3} alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
