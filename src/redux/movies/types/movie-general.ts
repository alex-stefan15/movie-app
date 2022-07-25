export type Movie = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  videos?: { results: [{ key: '' }] };
};

export type MoviesState = {
  loading: boolean;
  movies?: Movie[];
  error?: Error;
};

export type DetailsState = {
  loading?: boolean;
  movie?: Movie;
  error?: Error;
};
