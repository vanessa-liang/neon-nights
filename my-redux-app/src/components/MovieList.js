import React from "react";
import "../globals/globalVariables";
import { posterPath } from "../globals/globalVariables";
import FavBtn from "./FavBtn";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div key={movie.id} className="image-container d-flex justify-content-start m-3">
          {/* <NavLink to="/single"> */}
          <div className="movie-fav">
            <FavBtn/>
            <img src={posterPath + movie.poster_path} alt="movie"></img>
          </div>
          {/* </NavLink> */}
        </div>
      ))}
    </>
  );
};

export default MovieList;
