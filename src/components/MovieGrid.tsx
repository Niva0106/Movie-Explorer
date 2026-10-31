import type { Movie } from "../types";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

function MovieGrid({ movies, onMovieClick }: MovieGridProps) {
  return (
    <div className="movie-grid">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={onMovieClick}
          />
        ))
      ) : (
        <p className="empty-message">No movies found.</p>
      )}
    </div>
  );
}

export default MovieGrid;