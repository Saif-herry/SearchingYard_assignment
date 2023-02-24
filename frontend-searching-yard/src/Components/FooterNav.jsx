import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/FooterNav.css"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
const FooterNav = () => {
  return (
    <div className='SimpleNavContainerfooer'>
      <div className="NavLinksfooter">
        <Link style={{marginTop:"10px"}}> <AiOutlineLeft/> </Link>
       | <Link to="/cos"> Archive</Link>|
        <Link>Submissions</Link>|
        <Link to="/ind">index</Link>|
        <Link to="/sea">Search</Link>|
        <Link >Calendar</Link>|
        <Link to="https://apod.nasa.gov/apod.rss">RSS</Link>|
        <Link >Education</Link>|
        <Link > About APOD</Link>|
        <Link>Discuss</Link>|
        
        <Link style={{marginTop:"10px"}}><AiOutlineRight/></Link>
      
      </div>    
    </div>
  )
}

export default FooterNav