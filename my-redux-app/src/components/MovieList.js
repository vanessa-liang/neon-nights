import React from "react";
import "../globals/globalVariables";
import { posterPath } from "../globals/globalVariables";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div key={movie.id} className="image-container d-flex justify-content-start m-3">
          {/* <NavLink to="/single"> */}
          <img src={posterPath + movie.poster_path} alt="movie"></img>
          {/* </NavLink> */}
        </div>
      ))}
    </>
  );
};

export default MovieList;
