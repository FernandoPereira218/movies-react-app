import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './MovieDetails.css';
const MovieDetails = () => {
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState([{}]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/" +
          params.movieId +
          "?api_key=0011910262529f0a261bcfa3c2079e2b&language=pt-BR"
      );
      console.log(data);
      setMovieDetails(data);
    };

    fetchMovieDetails();
  }, []);

  return (
    <>
      <div>
        <h1 className="movie-details-title">{movieDetails.title}</h1>
        <img
          src={
            "https://www.themoviedb.org/t/p/original" + movieDetails.poster_path
          }
          className="movie-details-poster"
        ></img>
        <p className="movie-details-synopsis">{movieDetails.overview}</p>
      </div>
    </>
  );
};

export default MovieDetails;
