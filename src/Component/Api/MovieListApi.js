import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieListHeading from "../Heading/MovieListHeading";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";

require("dotenv").config();

function MovieListApi() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const MoviesRequest = async (searchValue) => {
    try {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`;
      const response = await axios(url);
      const responseJson = await response.data;

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    MoviesRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <div>
        <MovieListHeading heading="Movies" />
      </div>
      <br />
      <div className="row">
        <SearchBar setSearchValue={setSearchValue} />
      </div>
      <br />
      <div className="images">
          {loading ? setLoading : <div className="loader"/>}
        <Card movies={movies} />
       
      </div>
    </>
  );
}

export default MovieListApi;
