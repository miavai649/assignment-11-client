import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import Card from "./Card";

const AllServices = () => {
    useTitle('All Product')
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://b6a11-service-review-server-side-miavai649.vercel.app/allServices")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
      <div>
          <h2 className="text-center text-6xl text-purple-500 my-20">Choose your Favourite Flavour</h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-20 mx-auto">
        {products.map((product) => (
          <Card key={product._id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
