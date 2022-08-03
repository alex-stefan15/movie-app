import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { Loading } from '../../components/loading';
// import { RouteComponentProps } from 'react-router-dom';
import { RootState, useAppDispatch, useAppStateSelector } from '../../redux';
import { getMovieDetails } from '../../redux/movies/actions';
import { Movie } from '../../redux/movies/types/movie-general';
import styles from './styles.module.css';

type Props = {
  id: number;
};

export const MovieDetails = () => {
  const dispatch = useAppDispatch();
  const { movie, loading, error } = useAppStateSelector(
    (state: RootState) => state.movie,
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetails(Number(id)));
  }, [dispatch, id]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        { error }
      ) : (
        movie && (
          <div className={styles.container}>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
            {movie.videos?.results[0] !== undefined ? (
              <div className={styles.videoWrapper}>
                <iframe
                  title={movie.original_title}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  width="560"
                  height="349"
                  src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                  frameBorder="0"
                />
              </div>
            ) : (
              <div>
                <img
                  src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt=""
                />
              </div>
            )}
          </div>
        )
      )}
    </>
  );
};
