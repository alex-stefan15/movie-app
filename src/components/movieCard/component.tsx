import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../redux/movies/types/movie-general';

export const MovieCard: React.FC<Movie> = ({
  id,
  original_title,
  poster_path,
  release_date,
  overview,
  backdrop_path,
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="card" id={id?.toString()}>
        <div className="cardInfo">
          <div className="cardHeader">
            {poster_path !== null ? (
              <img
                className="smallPoster"
                src={`$http://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={original_title}
              />
            ) : (
              <img
                className="smallPoster"
                src={`https://via.placeholder.com/300x450?text=Missing`}
                alt={original_title}
              />
            )}
            <h2 className="cardTitle">{original_title}</h2>
            <h4>{release_date.slice(0, 4)}</h4>
          </div>
          <div className="descriptionContainer">
            <p className="description">{overview.slice(0, 130)}...</p>
          </div>
        </div>
        {backdrop_path?.length > 0 ? (
          <div
            style={{
              backgroundImage: `url(http://image.tmdb.org/t/p/w500${backdrop_path})`,
            }}
            className="backgroundImage"
          ></div>
        ) : poster_path !== null ? (
          <div
            style={{
              backgroundImage: `url(http://image.tmdb.org/t/p/w500${poster_path})`,
            }}
            className="backgroundImage"
          ></div>
        ) : (
          <div
            style={{
              backgroundImage: `url(https://wallpapercave.com/wp/wp2494960.png)`,
            }}
            className="backgroundImage"
          ></div>
        )}
      </div>
    </Link>
  );
};
