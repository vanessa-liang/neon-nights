import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiPath, posterPath, apiKey } from "../globals/globalVariables";
import FavBtn from "../components/FavBtn";
import { addMovie, deleteMovie } from "../features/slices/favsSlice";
import { useDispatch } from "react-redux";
import "../scss/styles.scss";

const Single = () => {
  const [movie, setMovie] = useState([]);
  const [rating, setRating] = useState(null);
  const [backgroundPoster, setBackgroundPoster] = useState("");

  let { id } = useParams();

  let fetchMovie = async () => {
    let results = await fetch(`${apiPath}${id}?${apiKey}&language=en-US`);
    const jsonData = await results.json();
    console.log(jsonData);
    setMovie(jsonData);
    setRating(Math.round(jsonData.vote_average * 10));
    jsonData.backdrop_path ? console.log("hooray") : console.log("boo");
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  const dispatch = useDispatch();

  function handleAddMov(mov) {
    dispatch(addMovie(mov));
  }

  function handleDeleteMov(mov) {
    dispatch(deleteMovie(mov));
  }

  return (
    <div className="single-wrapper">
      <div className="single-content">
        <h1>{movie.title}</h1>
        <div className="mov-poster-div">
          <img src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className="mov-poster"></img>
        </div>

        <div className="rating-and-fav">
          <div className="rating">
            <p>{rating}%</p>
          </div>
          <div className="single-pg-fav">
            <FavBtn handleAddMov={handleAddMov} handleDeleteMov={handleDeleteMov} mov={movie} />
          </div>
        </div>

        <div className="overview">
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>

        <div className="release-date">
          <p>Released {movie.release_date}</p>
        </div>
      </div>

      <div className="background-poster">{movie.backdrop_path && <img src={`https://www.themoviedb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className="mov-backdrop"></img>}</div>
    </div>
  );
};

export default Single;
