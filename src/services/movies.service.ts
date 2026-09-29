import { moviesApis } from "../config/http";
import type { ApiResp } from "../model/movies.models";

export const getPopularMovies = () => moviesApis.get<ApiResp>('movie/popular');

export const getMovie = (movieId: number) => moviesApis.get(`movie/${movieId}`);