import type { Movie } from "../../model/movies.models";
import './MovieCard.css';

type Props = {
  movie: Movie
};

const MovieCard = ({ movie }: Props) => {
  const data = new Date(movie.release_date).toLocaleDateString("pt-BR");
  return (
    <div className="container-movie">
      <div className="title-movie">
        <h3>{movie.title}</h3>
      </div>
      <img
        src={`${import.meta.env.VITE_API_IMG_BASE_URL}w200${movie.poster_path}`}
        alt=""
      />
      <span className="movie-release">
        Lançamento: {data}
      </span>
      <span className="movie-vote-average">
        ⭐{movie.vote_average.toPrecision(3)}
      </span>
      <div className="movie-overview">
        <p>{movie.overview}</p>
      </div>
    </div>
  )
};

export default MovieCard;