import { moviesApis } from "../config/http";
import type { IMovieDetail, IMovieList } from "../model/movies.models";

export const getPopularMovies = () => moviesApis.get<IMovieList>('movie/popular');

export const getMovie = (movieId: number) => moviesApis.get<IMovieDetail>(`movie/${movieId}`);