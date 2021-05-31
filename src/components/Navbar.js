import React from 'react';
//REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {HashLink as Link} from 'react-router-hash-link'
const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
  <a className="navbar-brand" href="#">Sindhu Bagal</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
    <li className="nav-item active">
        <a className="nav-link" href ="/home">Home </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href ="/about">About </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href ="/more">More</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href ="/contacts">Contacts</a>
      </li>
      
    </ul>
    
    </div>
  </div>
</nav>
    );
};

export default Navbar
