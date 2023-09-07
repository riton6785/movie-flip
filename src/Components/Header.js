import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Header.css"

const Header = () => {
  return (
    <div className="completeHeader">
        <div className="navigation">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/series">Series</Link>
        </div>
        <div className="login_signup">
          <Link to="/sign In">Sign In </Link>
          <Link to="/sign Up">Sign Up</Link>
        </div>
    </div>
           
       
  )
}

export default Header