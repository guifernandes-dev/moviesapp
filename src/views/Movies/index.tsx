import MovieCard from "../../components/MovieCard";
import { useMovies } from "../../hooks/useMovies";
import styles from "./Movies.module.css";

const Movies = () => {
  const movies = useMovies();

  return (
    <main>
      <h2>Popular Movies</h2>
      <section className={styles.containerMovies}>
        {
          movies.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })
        }
      </section>
    </main>
  )
};

export default Movies;