import React from 'react';


const ReviewList = (props)=>{
        const reviews = props.reviews.map((review)=> {
            return(
                <div key={review.id}>
                    <h4>{review.name}</h4>
                    <h5>{review.score}</h5>
                </div>
            )  
        });
        return(
            <div classNam="review-container">
                {reviews}
            </div>
        )
   

}

export default ReviewList;