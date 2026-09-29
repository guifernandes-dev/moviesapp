import { useEffect, useState } from "react";
import type { Movie } from "../../model/movies.models";
import { getPopularMovies } from "../../services/movies.service";
import MovieCard from "../../components/MovieCard";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies()
      .then(({ data }) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2>Popular Movies</h2>
      <div className="container-movies">
        {
          movies.map((movie, index) => {
            return (
              <MovieCard key={index} movie={movie} />
            )
          })
        }
      </div>
    </>
  )
};

export default Movies;