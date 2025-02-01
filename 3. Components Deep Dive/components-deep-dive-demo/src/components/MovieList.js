import Movie from "./Movie";

function MovieList({ movies }) {
  return [
    <Movie {...movies[0]} />,
    <Movie {...movies[1]} />,
    <Movie {...movies[2]} />,
    <Movie {...movies[3]} />,
];
}

export default MovieList;
