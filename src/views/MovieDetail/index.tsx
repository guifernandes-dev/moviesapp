import { Link, useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovies";
import styles from './MovieDetail.module.css';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useMovie(Number(id));
  const baseUrlImg = `${import.meta.env.VITE_API_IMG_BASE_URL}/original/`;
  const data = new Date(movie ? movie.release_date : "").toLocaleDateString("pt-BR");
  return (
    <main
      style={{
        backgroundImage: `url(${baseUrlImg}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: 'flex',
        justifyContent: 'center',
        padding: '30px 0'
      }}
    >
      <section
        className={styles.movieDetailContainer}
      >
        <h2>{movie?.title}</h2>
        <div className={styles.movieDetailContent}>
          <div>
            <img
              className={styles.movieFolder}
              src={`${baseUrlImg}${movie?.poster_path}`}
              alt=""
            />
            <p><Link to={movie ? movie.homepage : ""}>Movie Official Page</Link></p>
          </div>
          <div>
            <p>{movie?.tagline}</p>
            <p>{movie?.overview}</p>
            <p><b>Release:</b> {data}</p>
            <p><b>Vote Average:</b> {movie?.vote_average.toPrecision(3)}⭐ ({movie?.vote_count} votes)</p>
            <p><b>Genres:</b></p>
            <ul>
              {movie?.genres.map(({ name }) => <p>{name}</p>)}
            </ul>
            <div>
              <p><b>Production Companies:</b></p>
              <div className={styles.productionCompContainer}>
                {movie?.production_companies.map((productionComp) => {
                  return (
                    <img
                      className={styles.productionCompLogo}
                      src={`${baseUrlImg}${productionComp?.logo_path}`}
                      alt={productionComp.name}
                    />
                  )
                })}
              </div>
            </div>
            <p><b>Revenue:</b> {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(movie ? movie.revenue : 0)}</p>
          </div>
        </div>
      </section>
    </main>
  )
};

export default MovieDetail;