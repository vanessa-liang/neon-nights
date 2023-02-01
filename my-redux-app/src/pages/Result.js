import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiKey } from "../globals/globalVariables";
import MovieList from "../components/MovieList";

function Result() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState("");

  let location = useLocation();
  console.log(location.state.searchInput);
  let searchInput = location.state.searchInput;
  let searchQuery = searchInput.replace(/\s+/g, "-");

  let fetchData = async () => {
    setSearchDisplay(searchInput);
    let results = await fetch(`https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&query=${searchQuery}&page=1`);
    const jsonData = await results.json();
    setMoviesData(jsonData.results.slice(0, 12));
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <>
      <p>Showing results for {searchDisplay}</p>
      <div className="container-fluid movie-app">
        <div className="row">
          <MovieList movies={moviesData} />
        </div>
      </div>
    </>
  );
}

export default Result;
