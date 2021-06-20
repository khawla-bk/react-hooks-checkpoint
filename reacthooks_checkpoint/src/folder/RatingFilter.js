import React from "react";
import Rating from "./Rating";

export const RatingFilter = (props) => {
  return (
    <div>
      <p className="filterrating">Filter By Rating</p>
      <Rating count={props.count} change={props.onchange} />
    </div>
  );
};
