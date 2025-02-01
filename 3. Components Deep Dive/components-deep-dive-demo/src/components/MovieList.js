import Movie from "./Movie";
import React from "react";

function MovieList({ movies }) {
  // let movieList = [];
  // for (const movie of movies) {
  //   // movieList.push(React.createElement(Movie, movie));
  //   movieList.push(
  //     <li>
  //       <Movie {...movie} />
  //     </li>
  //   );
  // }

  // let movieList = movies.map((movie) => (
  //   <li>
  //     <Movie {...movie} />
  //   </li>
  // ));

  return (
    <ol>
      {movies.map((movie) => (
        <li>
          <Movie {...movie} />
        </li>
      ))}
    </ol>
  );
}

export default MovieList;
