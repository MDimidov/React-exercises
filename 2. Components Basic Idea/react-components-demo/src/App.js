import "./App.css";
import Counter from "./components/Counter";
import MovieList from "./components/MovieList";
import Timer from "./components/Timer";

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
      <Counter 
      countStart={0}
      canReset
      />
      <Timer start={50}/>
      <Timer start={10}/>
      <Timer start={100}/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
