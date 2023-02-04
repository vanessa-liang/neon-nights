import React from "react";
import { useSelector } from "react-redux";
import { posterPath } from "../globals/globalVariables";
import FavBtn from "../components/FavBtn";
import { deleteMovie } from "../features/slices/favsSlice";
import { useDispatch } from "react-redux";
import "../scss/styles.scss";
import MovieList from "../components/MovieList";
const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

function Favourites() {

  const favs = useSelector((state) => state.favs.items);
  const dispatch = useDispatch();

  function handleDeleteMov(mov) {
    dispatch(deleteMovie(mov));
  }

  console.log(favs)

  return (
    <>
    <header>
      <h1>Favourites</h1>
    </header>

    <main>
      {favs.length < 1 ? (
        <section className="fav-pg-nofav">
          <p>You have no favourite movies selected. Return to the home page and click some hearts to add them to your list!</p>
          <img src={`${imageFolderPath}neonheartunclicked.png`} alt="Unclicked heart"></img>
        </section>
      ) : (
        <section className="favourites-page">
          <MovieList movies={favs}/>
        </section>
      )
      }
    </main>
    </>
  );
}

export default Favourites;
