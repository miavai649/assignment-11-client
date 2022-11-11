import React from "react";

const ReviewCard = ({ rev }) => {
  const { review, userName, userImage } = rev;
  return (
    <div className="card w-96 bg-base-100 shadow-xl border border-purple-500">
      <div className="card-body">
        <div className="flex items-start">
          <img className="w-14 rounded-xl" src={userImage} alt="" />
            <div className=" ml-5">      
          <h2 className="text-xl font-semibold">{userName}</h2>
        <p>{review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
