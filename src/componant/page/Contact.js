import React from 'react'
import Innerbanner from "../../Innerbanner";

function Contact() {
    return (
<section className="blog-details-area ">
    <Innerbanner
        name="Contact Us"
    />
	<div className="container pt-70 pb-120">
            <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="section-title text-center pb-20">
                    <h4 className="title">Get in touch</h4>
                    <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                </div> 
            </div>
        </div>
		<div className="row">


            <div className="col-sm-6">

                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                    <div className="blog-details-comment-form pt-115">
                                    <h4 class="comment-form-title">We love <span style={{display:'inline'}}>to hear from you or have a project on mind? lets talk.</span></h4>
                <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam unde repellendus delectus facilis quia consequatur maxime perferendis! Sequi, modi consequatur.     
                <br/> <br/> Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                                        </div>

                                        <div className="single-item">
                                            <div className="icon">
                                                <i className="lni lni-phone"></i>
                                            </div>
                                            <div className="text">
                                                <p>0045939863784</p>
                                                <p>+004389478327</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="single-item">
                                            <div className="icon">
                                                <i className="lni lni-envelope"></i>
                                            </div>
                                            <div className="text">
                                                <p>yourmail@gmail.com</p>
                                                <p>admin@yourwebsite.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="single-item">
                                            <div className="icon">
                                                <i className="lni lni-map-marker"></i>
                                            </div>
                                            <div className="text">
                                                <p>John's House, 13/5 Road, Sidny United State Of America</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
            </div>{/*---col-sm-5---*/}




            <div className="col-sm-6">

                <div className="blog-details-comment-form pt-115">
                    <h4 className="comment-form-title pb-10"><i className="lni-envelope"></i> Leave <span>A Message.</span></h4>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="comment-form mt-45">
                                <label>Full Name</label>
                                <input type="text" placeholder="Full Name :"/>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="comment-form mt-45">
                                <label>Email</label>
                                <input type="email" placeholder="Email :"/>
                            </div> 
                        </div>
                        <div className="col-md-12">
                            <div className="comment-form mt-45">
                                <label>Message</label>
                                <textarea placeholder="Enter your message..."></textarea>
                            </div> 
                        </div>
                        <div className="col-md-12">
                            <div className="comment-form mt-45">
                                <button type="submit" className="main-btn">Send Message</button>
                            </div> 
                        </div>
                    </div> 
                </div> 

            </div>{/*---col-sm-7---*/}

            


		</div> {/*--row---*/}
	</div> 
</section>
    );
}

export default Contact
