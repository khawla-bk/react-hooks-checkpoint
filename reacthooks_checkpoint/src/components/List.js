import MovieCard from "./Card";

function List({ movies, searchValue, rate }) {
  return (
    <div>
      {movies
        .filter(
          (el) =>
            el.name.toUpperCase().includes(searchValue.toUpperCase()) &&
            el.rate >= rate
        )
        .map((el, i) => (
          <MovieCard movies={el} />
        ))}
    </div>
  );
}

export default List;
