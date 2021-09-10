import React from 'react'
import { NavLink } from 'react-router-dom';

import Heroimg from "./assets/img/hero/hero-image.png";
import Heroshape from "./assets/img/hero/header-shape.png";

function Hero() {
    return (
        <div id="home" className="header-hero bg_cover d-lg-flex align-items-center ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="header-hero-content">
                            <h1 className="hero-title wow fadeInUp">A Creative &amp; Modern Web Design Agency</h1>
                            <p className="text wow fadeInUp">It is a long established fact that a reader will be distracted by the readable content Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="header-play wow fadeInUp">
                            <NavLink class="play-btn video-popup" to="https://www.youtube.com/watch?v=r44RKWyfcFw">Explore Now <i class="lni-play"></i></NavLink>
                            </div>
                        </div> 
                    </div>

                    {/*image*/}
                    <div className="header-hero-image d-flex align-items-center wow fadeInRightBig col-lg-6 ">
                        <div className="image">
                            <img src={Heroimg} alt="Hero Image"/>
                        </div>
                    </div> 
                </div> 
            </div>
            <div class="header-shape">
              <img src={Heroshape} alt="shape"/>
            </div>
        </div>
       
    );
}

export default Hero
