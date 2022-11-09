import React from "react";

const Service = ({service}) => {
    const { price, details, image, title } = service;
  return (
    <div className="card w-96 glass">
      <figure>
        <img className="w-80 h-80 rounded-xl" src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
        {
            details.length > 100 ?
                          <>
                          {details.slice(0, 100) + '.....'}
                          </>
              :
              details
          }
        </p>
        <div className="card-actions justify-between">
                  <p className="mt-4 text-xl font-bold">Price: <span className="text-purple-500">${ price}</span></p>
          <button className="btn">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
