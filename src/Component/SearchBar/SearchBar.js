import React from "react";

const SearchBar = (props) => {

  return (
    <div className="col-12">
      <input
        className="form-control"
        placeholder="Search Movies..."
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
      ></input>
      <br/>
    </div>
  );
}

export default SearchBar;
