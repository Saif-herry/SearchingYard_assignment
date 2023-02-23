import React from 'react'
import {Link} from "react-router-dom"
import "../Styles/SimpleNav.css"
const SimpleNav = () => {
  return (
    <div className='SimpleNavContainer'>
      <div className="NavLinks">
        |<Link to="/ind">Index</Link>|
        <Link to="/sea">Search</Link>|
        <Link to="/">Today's Picture </Link>|
      
      </div>
    </div>
  )
}

export default SimpleNav