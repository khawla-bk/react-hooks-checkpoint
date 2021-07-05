import React from "react";
import ReactStars from "react-rating-stars-component";

function StarRating({ setRate }) {
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
}
export default StarRating;
