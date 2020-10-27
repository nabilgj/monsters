import React from "react";
import classes from "./SearchBox.module.css";

const SearchBox = ({ placeholder, handleChanged }) => (
  <input
    className={classes.SearchBox}
    type="search"
    placeholder={placeholder}
    onChange={handleChanged}
  />
);

// into App
export default SearchBox;
