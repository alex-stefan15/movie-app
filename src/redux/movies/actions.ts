import axios from 'axios';
import { AppDispatch } from '..';
import { MOVIE_URL } from './constants';
import {
  GET_MOVIE_LIST_FAIL,
  GET_MOVIE_LIST_LOADING,
  GET_MOVIE_LIST_SUCCESS,
} from './types/get-movie-list';
import { MoviesDispatchTypes } from './types/movie-dispatch-types';

export const getMovies = () => (dispatch: AppDispatch<MoviesDispatchTypes>) => {
  dispatch({ type: GET_MOVIE_LIST_LOADING });

  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.BASE_MOVIES_URL}${MOVIE_URL}`)
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
        .get(`${process.env.BASE_MOVIES_URL}${MOVIE_URL}${input}`)
        .then((res) => {
          dispatch({ type: GET_MOVIE_LIST_SUCCESS, payload: res.data.resuts });
        })
        .catch((err) => {
          dispatch({
            type: GET_MOVIE_LIST_FAIL,
            payload:
              err.response && err.response.data.message
                ? err.response.data.message
                : err.message,
          });
        });
    });
  };
