import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import "./PhotoField.style.scss";

/**
 * Using hooks and react-redux we take photoList data to check if it's equal to:
 * "Loading" - returns loader spinner
 * Error - returns error text
 * Empty_array - no data
 * if photoList didn't match any of these then we output photoList
 * we show spinner before each photo loads also
 * useEffect - to refresh useState after new list is fetched
 */
const PhotoField = () => {
  const photoList = useSelector(state => state.photoList.photoList);
  const [isLoaded, setIsLoaded] = useState([]);

  useEffect(() => {
    setIsLoaded([]);
  }, [photoList]);

  if (photoList === null) {
    return <h1 className="u-center ">Start Searching</h1>;
  }

  if (photoList === "error") {
    return <h1 className="u-center ">No data found</h1>;
  }

  if (photoList === "Loading") {
    return (
      <Loader
        className="u-center"
        type="Circles"
        color="#somecolor"
        height={80}
        width={80}
      />
    );
  }

  if (photoList.length === 0) {
    return <h1 className="u-center">No data found</h1>;
  }

  return (
    <div className="PhotoField ">
      {photoList.map((item, index) => {
        return (
          <div className="PhotoFieldBox" key={index}>
            <img
              src={item.urls.regular}
              onLoad={() => setIsLoaded([...isLoaded, index])}
              className={isLoaded.includes(index) ? "display" : "noDisplay"}
            />
            {isLoaded.includes(index) ? null : (
              <Loader
                style={{ position: "absolute" }}
                type="Circles"
                color="#somecolor"
                height={80}
                width={80}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PhotoField;
