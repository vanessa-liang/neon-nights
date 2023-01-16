import React from "react";

import { useEffect, useState } from "react";
import "../globals/globalVariables";
import "../scss/styles.scss";
import MovieList from "../components/MovieList";

function Home() {
  const [moviesData, setMoviesData] = useState([]);

  const fetchData = async () => {
    const results = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5d25ff38c62c8743cafcfe4221c1f5ae&language=en-US&page=1");
    const jsonData = await results.json();
    setMoviesData(jsonData.results.slice(0, 12));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={moviesData} />
      </div>
    </div>
  );
}

export default Home;
