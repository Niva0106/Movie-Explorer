import type { Movie } from "./types";

const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.7,
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars."
  },
  {
    id: 2,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description: "A skilled thief enters people's dreams to steal secrets and attempts an almost impossible mission."
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 4,
    title: "La La Land",
    genre: "Romance",
    rating: 8.0,
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    description: "A musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles."
  }
];

export default movies;