import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const { title, price, ingredient, details, image } = useLoaderData();
  return (
    <div className="container mx-auto mb-96">
        <h2 className="text-center text-5xl text-purple-500 mt-10">Details & Reviews</h2>
      {/* full description */}

      <div className="card w-full bg-base-100 shadow-xl mt-20 ">
        <figure>
          <img src={image} className="h-96 w-full" alt="Shoes" />
        </figure>
        <div className="card-body w-full">
                  <h2 className="card-title">{title}</h2>
                  <p>{ details}</p>
                  <h2 className="card-title">Ingredient</h2>
                  <p>{ ingredient}</p>
          <div className="flex justify-end">
                      <p>Price: ${price }</p>
          </div>
        </div>
      </div>

      {/* review */}
      <div></div>
    </div>
  );
};

export default Details;
