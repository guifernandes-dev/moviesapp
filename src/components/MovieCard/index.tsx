import { NavLink } from "react-router-dom";
import type { IMovie } from "../../model/movies.models";
import styles from './MovieCard.module.css';

type Props = {
  movie: IMovie
};

const MovieCard = ({ movie }: Props) => {
  
  return (
    <NavLink
      className={styles.movieContainer}
      to={`/movie/${movie.id}`}
    >
      <div className={styles.title}>
        <h3>{movie.title}</h3>
      </div>
      <img
        className={styles.folder}
        src={`${import.meta.env.VITE_API_IMG_BASE_URL}w200${movie.poster_path}`}
        alt=""
      />
      <span className={styles.voteAverage}>
        ⭐{movie.vote_average.toPrecision(3)}
      </span>
    </NavLink>
  )
};

export default MovieCard;