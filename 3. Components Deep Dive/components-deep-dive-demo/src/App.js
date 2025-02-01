import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
// import { movies as movieData } from './movies'


function App() {
  // const [movies, setMovies] = useState(movieData);

  
  const [movies, setMovies] = useState([]);

useEffect(() => {
  fetch(`http://localhost:3000/data.json`)
    .then(res => res.json())
    .then(data => {
      setMovies(data.movies);
    });
}, []);


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
      movies={movies} 
      deleteMovieHandler={deleteMovieHandler}
      selectMovieHandler={selectMovieHandler}
      />
    </div>
  );
}

export default App;
