import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loading } from '../../components/loading';
import { MovieCard } from '../../components/movieCard/component';
import { Search } from '../../components/search';
import { RootState, useAppDispatch, useAppStateSelector } from '../../redux';
import { getMovies, searchMovies } from '../../redux/movies/actions';
import { Movie } from '../../redux/movies/types/movie-general';

export const MovieList = () => {
  const { movies, loading, error } = useAppStateSelector(
    (state: RootState) => state.movies,
  );
  const [query, setQuery] = useState(
    sessionStorage.getItem('queryInSessionStorage') || '',
  );
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    sessionStorage.setItem('queryInSessionStorage', query);
  }, [query]);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const searchQueryHandler = (query: string) => {
    setQuery(query);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    debouncedQuery !== null && debouncedQuery.length > 2
      ? dispatch(searchMovies(debouncedQuery))
      : dispatch(getMovies());
  }, [dispatch, debouncedQuery, debouncedQuery.length]);

  const { t } = useTranslation();
  console.log('query', query);
  console.log('debouncedQuery', debouncedQuery);
  return (
    <>
      <Search query={query} onSearch={searchQueryHandler} />
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="message">{/* <h4>{error}</h4> */}</div>
      ) : movies?.length ? (
        <ul className="movies-container">
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
