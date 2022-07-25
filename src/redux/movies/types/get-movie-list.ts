import { Movie } from './movie-general';

export const GET_MOVIE_LIST_LOADING = 'GET_MOVIE_LIST_LOADING';
export const GET_MOVIE_LIST_FAIL = 'GET_MOVIE_LIST_FAIL';
export const GET_MOVIE_LIST_SUCCESS = 'GET_MOVIE_LIST_SUCCESS';

export type GetMovieListLoading = {
  type: typeof GET_MOVIE_LIST_LOADING;
};

export type GetMovieListFail = {
  type: typeof GET_MOVIE_LIST_FAIL;
  payload: Error;
};

export type GetMovieListSuccess = {
  type: typeof GET_MOVIE_LIST_SUCCESS;
  payload: Movie[];
};
