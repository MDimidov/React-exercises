import Movie from "./Movie";

function MovieList({ movies }) {
    const firstMovie = movies[0];
  return (
    <Movie {...firstMovie} />
  );
}

export default MovieList;
