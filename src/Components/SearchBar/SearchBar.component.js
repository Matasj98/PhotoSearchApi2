import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../Actions/setSearchTerm";
import { getPhotosApi } from "../../Thunk/getPhotosApi";
import { calculateSavedQueries } from "../../Thunk/calculateSavedQueries";
import "./SearchBar.style.scss";

const SearchBar = () => {
  const dispatch = useDispatch();
  const term = useSelector(state => state.searchTerm.term);
  return (
    <div className="SearchBar">
      <input
        aria-label="search input"
        value={term}
        type="text"
        placeholder="Search for photos"
        onChange={e => dispatch(setSearchTerm(e.target.value))}
        onKeyDown={e => {
          if (e.key === "Enter") {
            dispatch(getPhotosApi());
          }
        }}
      />
      <button onClick={() => dispatch(getPhotosApi())}>Search</button>
      <button onClick={() => dispatch(calculateSavedQueries())}>Save</button>
    </div>
  );
};

export default SearchBar;
