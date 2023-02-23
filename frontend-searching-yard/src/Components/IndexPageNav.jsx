import React from "react";
import { Link } from "react-router-dom";

const IndexPageNav = () => {
  return (
    <div className="SimpleNavContainer">
      <div className="NavLinks">
      |<Link to="/">Today's Picture </Link>|
        <Link to="/cos"> Archive</Link>|
        <Link to="/sea">Search</Link>|
        <Link to="https://apod.nasa.gov/apod/calendar/allyears.html">Calendar</Link>|
        
      </div>
    </div>
  );
};

export default IndexPageNav;
