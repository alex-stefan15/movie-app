import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RootState, useAppDispatch, useAppStateSelector } from '../../redux';
import { getMovies, searchMovies } from '../../redux/movies/actions';
import { Loading } from '../../components/loading';
import { MovieCard } from '../../components/movieCard/component';
import { Search } from '../../components/search';
import { Movie } from '../../redux/movies/types/movie-general';
import { Header } from '../header/component';
import styles from './styles.module.css';

export const MovieList = () => {
  const dispatch = useAppDispatch();

  const { movies, loading, error } = useAppStateSelector(
    (state: RootState) => state.movies,
  );
  const [query, setQuery] = useState(
    sessionStorage.getItem('queryInSessionStorage') || '',
  );
  useEffect(() => {
    sessionStorage.setItem('queryInSessionStorage', query);
  }, [query]);

  const searchQueryHandler = (query: string) => {
    setQuery(query);
  };
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    debouncedQuery !== null && debouncedQuery.length > 2
      ? dispatch(searchMovies(debouncedQuery))
      : dispatch(getMovies());
  }, [dispatch, debouncedQuery, debouncedQuery.length]);

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Search query={query} onSearch={searchQueryHandler} />
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="message">{/* <h4>{error}</h4> */}</div>
      ) : movies?.length ? (
        <ul className={styles.container}>
          {movies.slice(0, 10).map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              original_title={movie.original_title}
              overview={movie.overview}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
            />
            // <div>
            //   <button>Delete</button>
            // </div>
          ))}
        </ul>
      ) : (
        <div className="message">
          <h4>{t('notFound')}</h4>
        </div>
      )}
    </>
  );
};
