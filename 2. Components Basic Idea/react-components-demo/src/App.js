import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const movies = [
    { title: "Man of Steel", year: 2008, cast: ["Henry Civil", "Russel Crow"] },
    { title: "Harry Potter", year: 2008, cast: ["Daniel", "Ema Watson"] },
    {
      title: "Word of the rings",
      year: 2008,
      cast: ["Orlando Bloom", "Pesho ot detskata"],
    },
  ];

  return (
    <div className="App">
      <h1>Hello React</h1>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
