import React from "react";
import "../globals/globalVariables";
import { Link } from "react-router-dom";
import { posterPath } from "../globals/globalVariables";
import FavBtn from "../components/FavBtn";
import { useDispatch } from "react-redux";
import { addMovie, deleteMovie } from "../features/slices/favsSlice";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

const MovieList = (props) => {
  const dispatch = useDispatch();

  function handleAddMov(mov) {
    dispatch(addMovie(mov));
  }

  function handleDeleteMov(mov) {
    dispatch(deleteMovie(mov));
  }

  return (
    <>
      {props.movies.map((movie) => (
        <div key={movie.id} className="image-container d-flex justify-content-start m-3">
          <div className="movie-fav">
            {/* <FavBtn 
              handleAddMov={handleAddMov}
              handleDeleteMov={handleDeleteMov}
              mov={movie}/> */}
            <Link key={movie.id} to={`/Single/${movie.id}`}>
              {movie.poster_path ? <img src={posterPath + movie.poster_path} alt={movie.title}></img> : <img src={`${imageFolderPath}image-not-available.svg`} alt="Image not Available"></img>}
            </Link>
            <div className="hover">
              <FavBtn handleAddMov={handleAddMov} handleDeleteMov={handleDeleteMov} mov={movie} />
              <p className="overview">{`${movie.overview.substring(0, 150)}...`}</p>
              <p className="date">{movie.release_date}</p>
              <p className="rating">{`${movie.vote_average * 10}%`}</p>
              <a href={`/Single/${movie.id}`}>
                <button className="more-info">More Info</button>
              </a>
            </div>
            <section className="movie-info">
              <h2>{movie.title}</h2>
            </section>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
