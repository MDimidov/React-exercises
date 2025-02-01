import { useState } from 'react';
import MovieList from './components/MovieList';
import { movies as movieData } from './movies'


function App() {
  const [movies, setMovies] = useState(movieData);

  function deleteMovieHandler(id) {
    setMovies(state => state.filter(m => m.id !== id))
  }

  function selectMovieHandler(id) {
    setMovies(state => state.map(m => ({...m, selected: m.id === id})));
  }

  return (
    <div className="App">
      <h1>Movie list</h1>

      <MovieList 
      movies={movies.slice(0, 20)} 
      deleteMovieHandler={deleteMovieHandler}
      selectMovieHandler={selectMovieHandler}
      />
    </div>
  );
}

export default App;
