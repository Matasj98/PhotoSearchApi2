import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SavedQueries.style.scss";
import { setSearchTerm } from "../../Actions/setSearchTerm";
import { getPhotosApi } from "../../Thunk/getPhotosApi";
import { removeQueryItem } from "../../Thunk/removeQueryItem";

const SavedQueries = () => {
  const queries = useSelector(state => state.savedQueries.savedQueries);
  const dispatch = useDispatch();
  return (
    <div className="SavedQueries">
      <h1>Saved Queries:</h1>
      {queries.map((item, index) => (
        <div key={index} className="SavedQueriesTerms">
          <h3
            className="term"
            key={index}
            onClick={() => {
              dispatch(setSearchTerm(item));
              dispatch(getPhotosApi());
            }}
          >
            {item}
          </h3>
          <h3
            className="delete"
            onClick={() => dispatch(removeQueryItem(item))}
          >
            X
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SavedQueries;
