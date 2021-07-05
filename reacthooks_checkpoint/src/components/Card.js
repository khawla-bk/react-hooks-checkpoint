import React from "react";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <img className="movieImg" src={props.movies.img} alt="" />

      <div className="caption">
        <StarRatingComponent className="star" value={props.movies.rate} />
        <h2>{props.movies.name} </h2>
        <p>{props.movies.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
