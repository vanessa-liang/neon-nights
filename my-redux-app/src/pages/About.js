
import React from "react";
import tmdb_logo  from "../images/themoviedb.svg";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-content">
       <p> This product uses the TMDB API but is not endorsed or certified by TMDB.
            The “Movie Database” is a community built movie and TV database that allows you to search, favorite, and find more information on movies and TV shows around the world.
            This application was created for educational purposes only.</p>
      </div>

      <img className="logo" src={tmdb_logo} alt="TMDB logo" />
      
    </div>
  );
}

export default About;
