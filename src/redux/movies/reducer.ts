import {
  GET_MOVIE_LIST_FAIL,
  GET_MOVIE_LIST_LOADING,
  GET_MOVIE_LIST_SUCCESS,
} from './types/get-movie-list';
import {
  GET_MOVIE_DETAILS_LOADING,
  GET_MOVIE_DETAILS_SUCCESS,
} from './types/movie-details';
import { MoviesDispatchTypes } from './types/movie-dispatch-types';
import { DetailsState, MoviesState } from './types/movie-general';

export const initialState: MoviesState = {
  loading: false,
  movies: [],
};

export const detailsInitialState: DetailsState = {
  loading: false,
};

export const moviesReducer = (
  state: MoviesState,
  action: MoviesDispatchTypes,
): MoviesState => {
  switch (action.type) {
    case GET_MOVIE_LIST_LOADING:
      return {
        loading: true,
        movies: [],
      };
    case GET_MOVIE_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_MOVIE_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export const movieDetailsReducer = (
  state: DetailsState = detailsInitialState,
  action: MoviesDispatchTypes,
): DetailsState => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIE_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        movie: action.payload,
        loading: false,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
