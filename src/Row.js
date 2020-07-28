import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
  //passing the props

  const [movies, setMovies] = useState([]); //empty movies array
  //using state, react hooks

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //appending the base url and the fetchUrl for each row
      setMovies(request.data.results); //console.log(requests.data.results) is the array of the movies
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //console.log(movies) or console.table()

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/*row posters */}

        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          ></img>
          //string-interpolation
          //path is sortoff like -- "/sifojdroigupofthd980.jpg"
        ))}
      </div>
    </div>
  );
}

export default Row;
