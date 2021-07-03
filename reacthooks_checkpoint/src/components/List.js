import MovieCard from "./Card";

function List({ movies }) {
  return (
    <div>
      {movies.map((el, i) => (
        <MovieCard movies={el} />
      ))}
    </div>
  );
}

export default List;
