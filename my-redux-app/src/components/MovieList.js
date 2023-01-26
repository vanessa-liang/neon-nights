import React from "react";
import "../globals/globalVariables";
import { Link } from "react-router-dom";
import { posterPath } from "../globals/globalVariables";
import FavBtn from "./FavBtn";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div key={movie.id} className="image-container d-flex justify-content-start m-3">
          <Link key={movie.id} to={`/Single/${movie.id}`}>
            <FavBtn />
            <img src={posterPath + movie.poster_path} alt="movie"></img>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieList;
