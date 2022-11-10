import React, { useEffect, useState } from "react";
import Card from "./Card";

const AllServices = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
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