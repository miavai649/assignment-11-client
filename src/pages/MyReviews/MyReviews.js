import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewsCard from "./MyReviewsCard";

const MyReviews = () => {
    useTitle("My Reviews");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
    const [reviews, setReviews] = useState([]);
    

    useEffect(() => {
        fetch(`https://assignment-11-server-omega-one.vercel.app/myreviews/${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])
    
    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this review')
        if (proceed) {
            fetch(`https://assignment-11-server-omega-one.vercel.app/myreviews/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.error('Review deleted')
                        const remaining = reviews.filter(ord => ord._id !== id);
                        setReviews(remaining)
                    }
                })
        }
  }
  
  const handleUpdate = id => {
    navigate(`/update/${id}`)
  }
 
  return (
    <div>
      <div>
        {
            reviews.map(rev => <MyReviewsCard handleUpdate={handleUpdate} handleDelete={handleDelete} key={rev._id} rev={rev}></MyReviewsCard>)
        }
      </div>
    </div>
  );
};

export default MyReviews;
