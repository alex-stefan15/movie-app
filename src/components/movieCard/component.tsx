import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux';
import { deleteMovie } from '../../redux/movies/actions';
import { Movie } from '../../redux/movies/types/movie-general';
import styles from './styles.module.css';

export const MovieCard: React.FC<Movie> = ({
  id,
  original_title,
  poster_path,
  release_date,
  overview,
  backdrop_path,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.card} id={id?.toString()}>
        <div className={styles.cardInfo}>
          <div className={styles.cardHeader}>
            <button
              id="delete-btn"
              onClick={() => {
                dispatch(deleteMovie(id));
              }}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
            <h2 className={styles.cardTitle}>{original_title}</h2>
            <h4>{release_date.slice(0, 4)}</h4>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{overview.slice(0, 130)}...</p>
          </div>
        </div>
        {backdrop_path?.length > 0 ? (
          <div
            style={{
              backgroundImage: `url(http://image.tmdb.org/t/p/w500${backdrop_path})`,
            }}
            className={styles.backgroundImage}
          ></div>
        ) : poster_path !== null ? (
          <div
            style={{
              backgroundImage: `url(http://image.tmdb.org/t/p/w500${poster_path})`,
            }}
            className={styles.backgroundImage}
          ></div>
        ) : (
          <div
            style={{
              backgroundImage: `url(https://i1.wp.com/popcorntime.movie/netflix.jpg)`,
            }}
            className={styles.backgroundImage}
          ></div>
        )}
      </div>
    </Link>
  );
};
