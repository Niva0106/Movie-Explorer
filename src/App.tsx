import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import movies from "./movies";
import type { Movie } from "./types";
import "./App.css";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <header>
        <h1>Movie Explorer 🎬</h1>
        <p>Explore your favourite movies</p>
      </header>

      <main>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="All">All Genres</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
        </select>

        <MovieGrid
          movies={filteredMovies}
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