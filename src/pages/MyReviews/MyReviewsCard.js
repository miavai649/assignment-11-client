import React from "react";
import { FaArrowAltCircleUp, FaTrashAlt } from "react-icons/fa";

const MyReviewsCard = ({ rev, handleDelete, handleUpdate }) => {
  const { _id, userName, review, userImage } = rev;
  return (
    <div className="my-8">
      <div className="card w-96 mt-5 mx-auto bg-base-100 shadow-xl border border-purple-500">
        <div className="card-body">
          <div className="flex items-start">
            <img className="w-14 rounded-xl" src={userImage} alt="" />
            <div className=" ml-5">
              <h2 className="text-xl font-semibold">{userName}</h2>
              <p>{review}</p>
            </div>
            <div className="flex flex-col ml-3">
                <button onClick={()=>handleDelete(_id)}><FaTrashAlt className="text-xl mb-8"></FaTrashAlt></button>
                <button onClick={()=>handleUpdate(_id)}><FaArrowAltCircleUp className="text-xl"></FaArrowAltCircleUp></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsCard;
