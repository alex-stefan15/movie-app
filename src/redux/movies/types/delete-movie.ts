import { Movie } from './movie-general';

export const DELETE_MOVIE_LOADING = 'DELETE_MOVIE_LOADING';
export const DELETE_MOVIE_FAIL = 'DELETE_MOVIE_FAIL';
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';

export type DeleteMovieLoading = {
  type: typeof DELETE_MOVIE_LOADING;
};

export type DeleteMovieFail = {
  type: typeof DELETE_MOVIE_FAIL;
};

export type DeleteMovieSuccess = {
  type: typeof DELETE_MOVIE_SUCCESS;
  payload: number;
};
