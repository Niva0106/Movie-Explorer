import type { Movie } from "../types.ts";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />

      <h3>{movie.title}</h3>
      <p>{movie.genre} · {movie.year}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieCard;