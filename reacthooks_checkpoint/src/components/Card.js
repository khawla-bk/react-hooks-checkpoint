import React from "react";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = (props) => {
  return (
    <>
      <div className="MovieCard">
        <img className="movieImg" src={props.movies.img} alt="" />

        <div className="caption">
          <h2>{props.movies.title} </h2>
          <p>{props.movies.description}</p>

          <StarRatingComponent className="star" value={props.movies.rate} />
        </div>
      </div>
    </>
  );
};

export default MovieCard;
