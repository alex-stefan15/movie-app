import { Movie } from './movie-general';

export const GET_MOVIE_DETAILS = 'MOVIE_DETAILS';
export const GET_MOVIE_DETAILS_FAIL = 'GET_MOVIE_DETAILS_FAIL';
export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';

export type GetMovieDetails = {
  type: typeof GET_MOVIE_DETAILS;
  payload: number;
};

export type GetMovieDetailsFail = {
  type: typeof GET_MOVIE_DETAILS_FAIL;
  payload: Error;
};

export type GetMovieDetailsSuccess = {
  type: typeof GET_MOVIE_DETAILS_SUCCESS;
  payload: Movie;
};
