import React from "react";
import { Card } from "./Card";

const CardList = ({ movies }) => {
  return (
    <div className="cards">
      {movies.map((el, i) => (
        <Card movie={el} />
      ))}
    </div>
  );
};
export default CardList;
