
import React from 'react'
import MovieCard from "../component/MovieCard";
import "./MovieList.css"



  

const MovieList=function ({ movieList , searchTitle,searchRate }) {
  return (
    <div className="movieslist">
      {movieList
      .filter((x)=>x.name.toLowerCase().includes(searchTitle.toLowerCase())  && x.rating >=searchRate)
      .map((movie, i) => (
        <MovieCard movie={movie} key={i} />

      ))}

    </div>
  );
};

export default MovieList;
