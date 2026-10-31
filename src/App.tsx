import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import movies from "./movies";
import type { Movie } from "./types";
import "./App.css";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div>
      <header>
        <h1>Movie Explorer 🎬</h1>
        <p>Explore your favourite movies</p>
      </header>

      <main>
        <MovieGrid
          movies={movies}
          onMovieClick={setSelectedMovie}
        />

        {selectedMovie && (
          <div className="movie-details">
            <img
              src={selectedMovie.poster}
              alt={selectedMovie.title}
            />

            <div>
              <h2>{selectedMovie.title}</h2>
              <p>{selectedMovie.description}</p>
              <p>Genre: {selectedMovie.genre}</p>
              <p>Release Year: {selectedMovie.year}</p>
              <p>⭐ {selectedMovie.rating}</p>

              <button onClick={() => setSelectedMovie(null)}>
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;