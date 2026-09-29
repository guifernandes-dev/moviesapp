import { useEffect, useState } from "react";
import type { IMovie, IMovieDetail } from "../model/movies.models";
import { getMovie, getPopularMovies } from "../services/movies.service";

export const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    getPopularMovies()
      .then(({ data }) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  return movies;
}

export const useMovie = (movieId: number) => {
  const [movie, setMovie] = useState<IMovieDetail | null>(null);

  useEffect(() => {
    getMovie(movieId)
      .then(({ data }) => setMovie(data))
      .catch((error) => console.error(error));
  }, [movieId]);

  return movie;
}