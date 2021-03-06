import React, { useEffect, useState } from 'react';
import DisplayReview from '../DisplayReview/DisplayReview';
import './ReviewItam.css';

const ReviewItam = () => {
    const [review, setReview] = useState([]);

    useEffect( () => {
        fetch('https://guarded-beach-94669.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))


    }, [])
    return (
        <div>
            <h1>Review</h1>

<div className="DispalyOder">
{
                review.map(review => <DisplayReview
                    key={review._id}
                    review={review}
                
                ></DisplayReview>)
            }
</div>
        </div>
    );
};

export default ReviewItam;