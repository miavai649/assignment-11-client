import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import ReviewCard from "../ReviewCard/ReviewCard";

const Details = () => {
  useTitle("Details");
  const { user } = useContext(AuthContext);
  const { _id, title, price, ingredient, details, image } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      review: e.target.review.value,
      email: user?.email,
      userImage: user?.photoURL,
      userName: user?.displayName,
      serviceId: _id,
    };

    console.log(review);

    fetch("https://assignment-11-server-omega-one.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefresh(!refresh)
        toast.success("Review added");
        e.target.reset();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(`https://assignment-11-server-omega-one.vercel.app/allreviews/${_id}`)
    .then(res => res.json())
    .then(data => setReviews(data))
  },[refresh, _id])

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-5xl text-purple-500 mt-10">
        Details & Reviews
      </h2>
      {/* full description */}

      <div className="card w-full bg-base-100 shadow-xl mt-20 ">
        <figure>
          <img src={image} className="h-96 w-full" alt="Shoes" />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <h2 className="card-title">Ingredient</h2>
          <p>{ingredient}</p>
          <div className="flex justify-end">
            <p>Price: ${price}</p>
          </div>
        </div>
      </div>

      {/* review */}
      <div className="my-28">
        
        {/* review display card */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5">
          {
            reviews.map(rev => <ReviewCard key={rev._id} rev={rev}></ReviewCard>)
          }
        </div>
        <div className="mt-8">
          {
            user?.email ? <>
          <form onSubmit={handleSubmit}>
            <textarea
              name="review"
              className="textarea textarea-bordered h-50 w-full"
              placeholder="Let us Know your review"
            ></textarea>
            <input className="btn" type="submit" value="Add Review" />
          </form>
            </> :
              <>
              <p className="text-center text-4xl mt-20">Please <Link className="link link-success" to='/login'>login</Link> to add a review</p>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default Details;
