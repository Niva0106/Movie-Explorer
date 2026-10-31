import MovieGrid from "./components/MovieGrid";
import movies from "./movies";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Movie Explorer 🎬</h1>
        <p>Explore your favourite movies</p>
      </header>

      <main>
        <MovieGrid movies={movies} />
      </main>
    </div>
  );
}

export default App;