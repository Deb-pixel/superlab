import React from 'react'

import stu_1 from "./assets/img/students/all/stu_1.jpg";
import stu_2 from "./assets/img/students/all/stu_2.jpg";
import stu_3 from "./assets/img/students/all/stu_3.jpg";
import stu_4 from "./assets/img/students/all/stu_4.jpg";
import stu_5 from "./assets/img/students/all/stu_5.jpg";
import stu_6 from "./assets/img/students/all/stu_6.jpg";
import stu_7 from "./assets/img/students/all/stu_7.jpg";
import stu_8 from "./assets/img/students/all/stu_8.jpg";


function Why() {
    return (
        <section id="about" className="about-area why pt-110 pb-120" >
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-9">
                <div className="about-title text-center wow fadeInUp" >
                    <h6 className="welcome">WELCOME</h6>
                    <h3 className="title"><span>Know </span> More About.</h3>
                </div>
            </div>
        </div> 
        <div className="row align-items-center pt-110">
            <div className="col-lg-6">
               <div className="row">
                    <div className="col-md-6">
                        <div class="image">
                            <img src={stu_1} alt="#"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="image">
                            <img src={stu_2} alt="#"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="image">
                            <img src={stu_3} alt="#"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="image">
                            <img src={stu_4} alt="#"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="image">
                            <img src={stu_5} alt="#"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="image">
                            <img src={stu_6} alt="#"/>
                        </div>
                    </div>
               </div>
            </div>
            <div className="col-lg-6">
                <div className="about-content wow fadeInRightBig" >
                    <h3 className="title">Learn Little <br/> More About Us <br/> and Industry.</h3>
                    <ul className="about-line">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p className="text">Duis et metus et massa tempus lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
                    inceptos himenaeos. Maecenas ultricies, orci molestie blandit interdum.
                     <br/> <br/> ipsum ante pellentesque nisl, eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.</p>

                     <p className="text">Duis et metus et massa tempus lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
                    inceptos himenaeos. Maecenas ultricies, orci molestie blandit interdum.
                     <br/> <br/> ipsum ante pellentesque nisl, eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.</p>


                     <p className="text">inceptos himenaeos. Maecenas ultricies, orci molestie blandit interdum.
                     <br/> <br/> ipsum ante pellentesque nisl, eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.</p>
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

export default Why
