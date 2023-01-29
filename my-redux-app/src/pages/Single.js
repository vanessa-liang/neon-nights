import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posterPath } from "../globals/globalVariables";
import FavBtn from "../components/FavBtn";
import { addMovie, deleteMovie } from "../features/slices/favsSlice";
import { useDispatch } from "react-redux";
import "../scss/styles.scss";

const Single = () => {
  const [movie, setMovie] = useState([]);
  const [rating, setRating] = useState(null);

  let { id } = useParams();

  let fetchMovie = async () => {
    let results = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5d25ff38c62c8743cafcfe4221c1f5ae&language=en-US`);
    const jsonData = await results.json();
    console.log(jsonData);
    setMovie(jsonData);
    setRating(Math.round(jsonData.vote_average * 10));
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
    <div>
      <h1>{movie.title}</h1>
      <div>
        <img src={posterPath + movie.poster_path} alt={movie.title}></img>
      </div>

      <div>
        <div className="rating">
          <p>{rating}%</p>
        </div>
        <div className="single-pg-fav">
        <FavBtn
        handleAddMov={handleAddMov}
        handleDeleteMov={handleDeleteMov}
        mov={movie}/>
        </div>
      </div>

      <div>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </div>

      <div>
        <p>Released {movie.release_date}</p>
      </div>

      <div>
        <img src={posterPath + movie.backdrop_path} alt={movie.title}></img>
      </div>
    </div>
  );
};

export default Single;
