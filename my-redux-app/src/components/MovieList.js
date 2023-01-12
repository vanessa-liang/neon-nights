import React from "react";
import "../globals/globalVariables";
import { posterPath } from "../globals/globalVariables";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={posterPath + movie.poster_path} alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
