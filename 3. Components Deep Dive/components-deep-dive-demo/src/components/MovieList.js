import Movie from "./Movie";
import React from "react";

function MovieList({ movies }) {
  let movieList = [];
  for (const movie of movies) {
    // movieList.push(React.createElement(Movie, movie));
    movieList.push(
      <li>
        <Movie {...movie} />
      </li>
    );
  }
  return <ol>{movieList}</ol>;
}

export default MovieList;
