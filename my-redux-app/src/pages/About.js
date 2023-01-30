import React from "react";

function About() {
  return (
    <div>
      <div className="about-content">
       <p> This product uses the TMDb API but is not endorsed or certified by TMDb.
            The “Movie Database” is a community built movie and TV database that allows you to search, favorite, and find more information on movies and TV shows around the world.
            This application was created for educational purposes only.</p>
      </div>

      <img src="/src/images/themoviedb.svg" alt="TMDB logo"></img>
      
    </div>
  );
}

export default About;
