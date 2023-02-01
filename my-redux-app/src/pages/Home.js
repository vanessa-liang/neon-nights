import React from "react";
import { useEffect, useState } from "react";
import { apiPath, apiKey } from "../globals/globalVariables";
import "../scss/styles.scss";
import MovieList from "../components/MovieList";
import { Banner } from "../components/banner";

<main>
  
</main>
function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const [movieFilter, setMovieFilter] = useState("now_playing");

  let fetchData = async () => {
    // let movieFilter = Filters.state.value;
    let results = await fetch(`${apiPath}${movieFilter}?${apiKey}&language=en-US&page=1`);
    const jsonData = await results.json();
    setMoviesData(jsonData.results.slice(0, 12));
  };

  useEffect(() => {
    fetchData();
  }, [movieFilter]);

  function handleChange(event) {
    const newFilter = event.target.value;
    console.log(newFilter);
    setMovieFilter(newFilter);
  }

  return (
    <div className="container-fluid movie-app">
      <select onChange={handleChange}>
        <option value="now_playing">Now Playing</option>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
      <div className="row">
        <MovieList movies={moviesData} />
      </div>
    </div>
  );
}


export default Home;
