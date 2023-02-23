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
        <Link to="https://apod.nasa.gov/apod/lib/apsubmit2015.html">Submissions</Link>|
        <Link to="/ind">index</Link>|
        <Link to="/sea">Search</Link>|
        <Link to="https://apod.nasa.gov/apod/calendar/allyears.html">Calendar</Link>|
        <Link to="https://apod.nasa.gov/apod.rss">RSS</Link>|
        <Link to="https://apod.nasa.gov/apod/lib/edlinks.html">Education</Link>|
        <Link to="https://apod.nasa.gov/apod/lib/about_apod.html"> About APOD</Link>|
        <Link to="http://asterisk.apod.com/viewtopic.php?t=42918">Discuss</Link>|
        
        <Link style={{marginTop:"10px"}}><AiOutlineRight/></Link>
      
      </div>    
    </div>
  )
}

export default FooterNav