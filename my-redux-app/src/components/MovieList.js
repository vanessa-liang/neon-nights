import React from "react";
import "../globals/globalVariables";
import { Link } from "react-router-dom";
import { posterPath } from "../globals/globalVariables";
// import FavBtn from "./FavBtn";

import FavBtn from "../components/FavBtn";
import { useDispatch } from "react-redux";
import { addMovie, deleteMovie } from "../features/slices/favsSlice";

const MovieList = (props, movieObj, isFav) => {

  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      console.log(obj);
      dispatch(addMovie(obj));
    } else {
      dispatch(deleteMovie(obj));
    }
  }

  return (
    <>
      {props.movies.map((movie) => (
        <div key={movie.id} className="image-container d-flex justify-content-start m-3">
          <div className="movie-fav">
            <FavBtn />
            <Link key={movie.id} to={`/Single/${movie.id}`}>
              <img src={posterPath + movie.poster_path} alt="movie"></img>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
