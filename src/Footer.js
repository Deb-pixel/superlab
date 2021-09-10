import React from 'react'
import { NavLink } from 'react-router-dom';

import Logoimgwhite from "./assets/img/logo/logo_white.png"
import Foshape from "./assets/img/footer/footer-shape.png"

function Footer() {
    return (
        <footer id="footer" className="footer-area bg_cover"> 
            <div class="footer-shape">
                 <img src={Foshape} alt="footer shape"/>
            </div>
            <div className="container">
                <div className="footer-widget pt-30 pb-70">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 order-sm-1 order-lg-1">
                            <div className="footer-about pt-40 wow fadeInLeftBig">
                                <NavLink to="home">
                                        <img src={Logoimgwhite} alt="Logo"  />

                                </NavLink>
                            </div>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, repudiandae! Totam, nemo sed? Provident.</p>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div> 

                        <div className="col-lg-3 col-sm-6 order-sm-3 order-lg-2">
       			<div className="footer-link pt-40 wow fadeInLeftBig">
       				<div className="footer-title">
       					<h5 className="title">Services</h5>
       				</div>
       				<ul>
       					<li><NavLink to="#">Web Design</NavLink></li>
       					<li><NavLink to="#">Web Development</NavLink></li>
       					<li><NavLink to="#">Business Consultancy</NavLink></li>
       					<li><NavLink to="#">apps Development</NavLink></li>
       				</ul>
       			</div> 
       		</div>
       		<div className="col-lg-3 col-sm-6 order-sm-4 order-lg-3">
       			<div className="footer-link pt-40 wow fadeInLeftBig">
       				<div className="footer-title">
       					<h5 className="title">About Us</h5>
       				</div>
       				<ul>
       					<li><NavLink to="#">Overview</NavLink></li>
       					<li><NavLink to="#">Why us</NavLink></li>
       					<li><NavLink to="#">Awards &amp; Recognitions</NavLink></li>
       					<li><NavLink to="#">Team</NavLink></li>
       				</ul>
       			</div> 
       		</div>
       		<div className="col-lg-3 col-sm-6 order-sm-2 order-lg-4">
       			<div className="footer-contact pt-40 wow fadeInLeftBig">
       				<div className="footer-title">
       					<h5 className="title">Contact Info</h5>
       				</div>
       				<div className="contact pt-10">
       					<p className="text">123 Stree New York City , United <br/> States Of America 750.</p>
       					<p className="text">explore@gmail.com</p>
       					<p className="text">+99 000 555 66 22</p>
       					<ul className="social mt-40">
       						<li><NavLink to="#"><i className="lni-facebook"></i></NavLink></li>
       						<li><NavLink to="#"><i className="lni-twitter"></i></NavLink></li>
       						<li><NavLink to="#"><i className="lni-instagram"></i></NavLink></li>
       						<li><NavLink to="#"><i className="lni-NavLinkedin"></i></NavLink></li>
       					</ul>
       				</div> 
       			</div> 
       		</div>


                    </div>
                </div>

            </div>
 
        </footer>
          );
}

export default Footer