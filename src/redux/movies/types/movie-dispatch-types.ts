import {
  GetMovieListLoading,
  GetMovieListFail,
  GetMovieListSuccess,
} from './get-movie-list';
import {
  GetMovieDetailsFail,
  GetMovieDetailsLoading,
  GetMovieDetailsSuccess,
} from './movie-details';

export type MoviesDispatchTypes =
  | GetMovieListLoading
  | GetMovieListFail
  | GetMovieListSuccess
  | GetMovieDetailsFail
  | GetMovieDetailsLoading
  | GetMovieDetailsSuccess;
