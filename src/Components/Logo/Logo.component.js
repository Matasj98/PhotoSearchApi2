import React from "react";
import "./Logo.style.scss";
import { useDispatch } from "react-redux";

export default () => {
  const disptach = useDispatch();
  return (
    <div className="Logo">
      <h1>
        Photo<span>Search</span>
      </h1>
    </div>
  );
};
