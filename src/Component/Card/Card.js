import React from "react";
import '../../App.css'

const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie, id) => (
        <div key={id}>
          <div className="col">
            <img
              src={movie.Poster}
              className="card-img-top"
              alt="Sample Movie"
            />
            <div className="card-body">
              <h6 className="card-title">{movie.Title.substring(0,18)} ..</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
