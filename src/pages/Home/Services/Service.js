import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, price, details, image, title } = service;
  return (
    <div className="card w-96 glass">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img className="w-80 h-80 rounded-xl" src={image} alt="car!" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {details.length > 100 ? (
            <>{details.slice(0, 100) + "....."}</>
          ) : (
            details
          )}
        </p>
        <div className="card-actions justify-between">
          <p className="mt-4 text-xl font-bold">
            Price: <span className="text-purple-500">${price}</span>
          </p>
          <Link to={`/details/${_id}`}>
            <button className="btn">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
