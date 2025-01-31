import Movie from "./Movie";

function MovieList(props) {

  return (
    <div>
      <h1>Movie List</h1>

      <Movie
        title={props.movies[0].title}
        year={props.movies[0].year}
        cast={props.movies[0].cast}
        isNew
      />

      <Movie
        title={props.movies[1].title}
        year={props.movies[1].year}
        cast={props.movies[1].cast}
        isNew
      />

      <Movie
        title={props.movies[2].title}
        year={props.movies[2].year}
        cast={props.movies[2].cast}
        isNew
      />
    </div>
  );
}

export default MovieList;
