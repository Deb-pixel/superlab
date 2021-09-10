import React from 'react'
import Innerbanner from "../../Innerbanner";

import Aboutimg from "../../assets/img/about/about.jpg";

function About() {
    return (
        <section id="about" className="about-area ">
         <Innerbanner
        name="About Us"
    />
    <div className="container pt-110 pb-120">
        <div className="row justify-content-center">
            <div className="col-lg-9">
                <div className="about-title text-center wow fadeInUp" >
                    <h6 className="welcome">WELCOME</h6>
                    <h3 className="title"><span>Know </span> More About.</h3>
                </div>
            </div>
        </div> 
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="about-image mt-50 wow fadeInLeftBig">
                    <img src={Aboutimg} alt=""/>
                </div> 
            </div>
            <div className="col-lg-6">
                <div className="about-content mt-50 wow fadeInRightBig" >
                    <h3 className="title">Learn Little <br/> More About Us <br/> and Industry.</h3>
                    <ul className="about-line">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p className="text">Duis et metus et massa tempus lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ultricies, orci molestie blandit interdum. <br/> <br/> ipsum ante pellentesque nisl, eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.</p>
                    <div className="about-counter pt-20">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="single-counter counter-color-1 mt-30 d-flex">
                                    <div className="counter-shape">
                                        <span className="shape-1"></span>
                                        <span className="shape-2"></span>
                                    </div>
                                    <div className="counter-content media-body">
                                        <span className="counter-count"><span className="counter">350</span>+</span>
                                        <p className="text">Clients</p>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-sm-6">
                                <div className="single-counter counter-color-2 mt-30 d-flex">
                                    <div className="counter-shape">
                                        <span className="shape-1"></span>
                                        <span className="shape-2"></span>
                                    </div>
                                    <div className="counter-content media-body">
                                        <span className="counter-count"><span className="counter">1720</span>+</span>
                                        <p className="text">Projects Done</p>
                                    </div>
                                </div> 
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div>
        </div> 
    </div> 

</section>
    );
}

export default About
