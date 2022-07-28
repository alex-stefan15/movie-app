import { DEFAULT_ECDH_CURVE } from 'tls';
import {
  DeleteMovieFail,
  DeleteMovieLoading,
  DeleteMovieSuccess,
} from './delete-movie';
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
  | GetMovieDetailsSuccess
  | DeleteMovieFail
  | DeleteMovieLoading
  | DeleteMovieSuccess;
