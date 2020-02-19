import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "./Components/SearchBar/SearchBar.component";
import PhotoField from "./Components/PhotoField/PhotoField.component";
import SavedQueries from "./Components/SavedQueries/SavedQueries.component";
import Logo from "./Components/Logo/Logo.component";
import { mountSavedQueriesLocalStorage } from "./Thunk/mountSavedQueriesLocalStorage";
import "./app.scss";
//I use useEffect to call Thunk when first mounted
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mountSavedQueriesLocalStorage());
  });

  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <div className="content">
        <PhotoField />
        <div className="lineBetween" />
        <SavedQueries />
      </div>
    </div>
  );
};

export default App;
