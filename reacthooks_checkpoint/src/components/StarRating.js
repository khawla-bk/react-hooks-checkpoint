import React from "react";

import StarRatingComponent from "react-star-rating-component";

function StarRating() {
  state = {
    rate: 1
  };

  onStarClick = (nextValue) => {
    this.props.Rate(nextValue);
  };

  return (
    <div>
      <StarRatingComponent
        className="starrate"
        starCount={5}
        onChange={(e) => this.setState(e.target.value)}
        onStarClick={this.onStarClick}
      />
    </div>
  );
}
export default StarRating;
