import React from 'react';
import { NavLink } from 'react-router-dom';
import Logoimg from "./assets/img/logo/logo.png"
import Logoimgwhite from "./assets/img/logo/logo_white.png"



function Navigation(props) {
    return (
        <div className="navbar-area sticky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <NavLink className="navbar-brand" to="index.html">
                  <img src={Logoimg} width="200" alt="Logo" className="Logoimg"/>
                  <img src={Logoimgwhite} width="200" alt="Logo" className="Logoimgwhite" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <NavLink className="page-scroll active" to="home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="page-scroll" to="about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="page-scroll" to="course">Course</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="page-scroll" to="portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="page-scroll" to="#0">Pricing</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="page-scroll" to="team">Team</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="" to="contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navigation
