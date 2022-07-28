import axios from 'axios';
import { AppDispatch } from '..';
import { MOVIE_URL } from './constants';
import {
  DELETE_MOVIE_FAIL,
  DELETE_MOVIE_LOADING,
  DELETE_MOVIE_SUCCESS,
} from './types/delete-movie';
import {
  GET_MOVIE_LIST_FAIL,
  GET_MOVIE_LIST_LOADING,
  GET_MOVIE_LIST_SUCCESS,
} from './types/get-movie-list';
import {
  GET_MOVIE_DETAILS_FAIL,
  GET_MOVIE_DETAILS_LOADING,
  GET_MOVIE_DETAILS_SUCCESS,
} from './types/movie-details';
import { MoviesDispatchTypes } from './types/movie-dispatch-types';
import { Movie } from './types/movie-general';

export const getMovies = () => (dispatch: AppDispatch<MoviesDispatchTypes>) => {
  dispatch({ type: GET_MOVIE_LIST_LOADING });

  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_BASE_MOVIES_URL}${MOVIE_URL}`)
      .then((res) => {
        dispatch({ type: GET_MOVIE_LIST_SUCCESS, payload: res.data.results });
        resolve(res);
      })
      .catch((err) => {
        dispatch({ type: GET_MOVIE_LIST_FAIL });
        reject(err);
      });
  });
};

export const searchMovies =
  (input: string) => (dispatch: AppDispatch<MoviesDispatchTypes>) => {
    dispatch({ type: GET_MOVIE_LIST_LOADING });
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.REACT_APP_BASE_MOVIES_URL}${MOVIE_URL}${input}`)
        .then((res) => {
          dispatch({ type: GET_MOVIE_LIST_SUCCESS, payload: res.data.resuts });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: GET_MOVIE_LIST_FAIL,
            payload:
              err.response && err.response.data.message
                ? err.response.data.message
                : err.message,
          });
          reject(err);
        });
    });
  };

export const deleteMovie =
  (movie: Movie) => (dispatch: AppDispatch<MoviesDispatchTypes>) => {
    dispatch({ type: DELETE_MOVIE_LOADING });
    return new Promise((resolve, reject) => {
      axios
        .delete(
          `${process.env.REACT_APP_BASE_MOVIES_URL}${MOVIE_URL}/${movie.id}`,
        )
        .then((res) => {
          dispatch({
            type: DELETE_MOVIE_SUCCESS,
            payload: res.data.movie.id,
          });
        })
        .catch((err) => {
          dispatch({ type: DELETE_MOVIE_FAIL });
          reject(err);
        });
    });
  };

export const getMovieDetails =
  (id: string) => (dispatch: AppDispatch<MoviesDispatchTypes>) => {
    dispatch({ type: GET_MOVIE_DETAILS_LOADING });

    return new Promise((resolve, reject) => {
      axios
        .get(
          `${process.env.REACT_APP_BASE_MOVIES_URL}${MOVIE_URL}${id}&append_to_response=videos,images`,
        )
        .then((res) => {
          dispatch({
            type: GET_MOVIE_DETAILS_SUCCESS,
            payload: res.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: GET_MOVIE_DETAILS_FAIL,
            payload:
              err.response && err.response.data.message
                ? err.response.data.message
                : err.message,
          });
          reject(err);
        });
    });
  };
