import MovieList from './components/MovieList';
import { movies } from './movies'

function App() {
  return (
    <div className="App">
      <h1>Movie list</h1>

      <MovieList movies={movies.slice(0, 20)} />
    </div>
  );
}

export default App;
