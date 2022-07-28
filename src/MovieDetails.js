import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { config } from "./config/config";

const API_URL = `http://www.omdbapi.com?apikey=${config.apiKey}`;

const MovieDetails = () => {
  const movieId = useParams().id;
  const [movieDetails, setMovieDetails] = useState({});
  const fetchMovieDetails = async (id) => {
    const response = await fetch(`${API_URL}&i=${id}`);
    const data = await response.json();
    setMovieDetails(data);
  };

  useEffect(() => {
    fetchMovieDetails(movieId);
  }, []);

  return (
    <div>
      <div className="movie-details">
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
        <div className="movie-description">
          <div>Title: {movieDetails.Title}</div>
          <div>Actors: {movieDetails.Actors}</div>
          <div>BoxOffice: {movieDetails.BoxOffice}</div>
          <div>Country: {movieDetails.Country}</div>
          <div>DVD: {movieDetails.DVD}</div>
          <div>Director: {movieDetails.Director}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
