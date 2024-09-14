import React from 'react';

const CustomerReview = ({ reviews }) => {
  // Ensure reviews is defined and is an array
  if (!reviews || !Array.isArray(reviews)) {
    return <div>No reviews available.</div>;
  }

  return (
    <div>
      <h6>Customer Reviews</h6>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default CustomerReview;
