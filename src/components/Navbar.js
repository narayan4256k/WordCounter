import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <img src="android-chrome-512x512.png" alt="logo" width="50" height="50" className="d-inline-block align-text-top mx-2"/>
      <div className="container-fluid">
       <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
         {/*<a href="/" className="navbar-brand">{props.title}</a>*/}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                {props.aboutText}
              </Link>
            </li>
             {/*<li className="nav-items">
              <a className='navbar-brand' href='#'>Home</a>
              </li>*/}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'} mx-3`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string };
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About Us'
};