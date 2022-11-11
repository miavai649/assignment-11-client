import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const router = useParams()
    const { id } = router;
    const [myReview, setMyReview] = useState({})
    const navigate = useNavigate()
  
    useEffect(() => {
        fetch(`https://assignment-11-server-omega-one.vercel.app/myreview/${id}`)
        .then(res => res.json())
        .then(data => setMyReview(data))
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const newReview = {
            review: e.target.review.value
        }

        fetch(`https://assignment-11-server-omega-one.vercel.app/myreview/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/my-reviews')
                toast.success('Updated successfully')
            })

        console.log(newReview)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <textarea
              name="review"
              className="textarea textarea-bordered h-50 w-full"
              placeholder="Let us Know your review"
              defaultValue={myReview?.review}
            ></textarea>
            <input className="btn" type="submit" value="Add Review" />
          </form>
        </div>
    );
};

export default Update;