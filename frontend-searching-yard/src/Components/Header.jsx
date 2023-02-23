import React from "react";
import "../Styles/Header.css"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="HeaderImg">
        <img
          src="https://apod.nasa.gov/apod/apod.gif"
          alt=""
        />
      </div>
      <div className="HeaderText">Astronomy Picture of the Day Archive </div>
    </div>
  );
};

export default Header;
