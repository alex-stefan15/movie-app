import { Movie } from './movie-general';

export const GET_MOVIE_DETAILS_LOADING = 'MOVIE_DETAILS_LOADING';
export const GET_MOVIE_DETAILS_FAIL = 'GET_MOVIE_DETAILS_FAIL';
export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';

export type GetMovieDetailsLoading = {
  type: typeof GET_MOVIE_DETAILS_LOADING;
};

export type GetMovieDetailsFail = {
  type: typeof GET_MOVIE_DETAILS_FAIL;
  payload: Error;
};

export type GetMovieDetailsSuccess = {
  type: typeof GET_MOVIE_DETAILS_SUCCESS;
  payload: Movie;
};
