import React from "react";
import { useSelector } from "react-redux";
import { posterPath } from "../globals/globalVariables";
import FavBtn from "../components/FavBtn";
import { deleteMovie } from "../features/slices/favsSlice";
import { useDispatch } from "react-redux";
import "../scss/styles.scss";
const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

function Favourites() {

  const favs = useSelector((state) => state.favs.items);

  function handleDeleteMov(mov) {
    dispatch(deleteMovie(mov));
  }

  const dispatch = useDispatch();

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
          {favs.map(favs => 
          <>
          <div className="movie-fav">
            {/* <div>{favs.title}</div> */}
            <FavBtn
            handleDeleteMov={handleDeleteMov}
            mov={favs}/>
          <img src={posterPath + favs.poster_path} alt={favs.title}></img>
          </div>
          </>
          )}
        </section>
      )
      }
    </main>
    </>
  );
}

export default Favourites;
