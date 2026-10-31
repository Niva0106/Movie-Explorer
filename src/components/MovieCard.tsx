import type { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <img src={movie.poster} alt={movie.title} />

      <h3>{movie.title}</h3>
      <p>{movie.genre} · {movie.year}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieCard;