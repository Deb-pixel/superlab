import React from 'react'

function Analysis() {
    return (
        <section className="analysis-area pt-115 pb-120 bg_cover" >
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7">
                <div className="analysis-title text-center pb-30 wow fadeInUp">
                    <h3 className="title">Learn More About Us In Stats</h3>
                </div> 
            </div>
        </div> 
        <div className="analysis-counter">
            <div className="row">
                <div className="col-md-3 col-6">
                    <div className="single-analysis-counter mt-30 wow fadeIn">
                        <span className="count"><span className="counter">1720</span><span className="plus">+</span></span>
                        <p className="text">Projects Done</p>
                    </div> 
                </div>
                <div className="col-md-3 col-6">
                    <div className="single-analysis-counter mt-30 wow fadeIn">
                        <span className="count"><span className="counter">98</span><span className="plus">%</span></span>
                        <p className="text">Client Satisfaction</p>
                    </div> 
                </div>
                <div className="col-md-3 col-6">
                    <div className="single-analysis-counter mt-30 wow fadeIn">
                        <span className="count"><span className="counter">30</span><span className="plus">+</span></span>
                        <p className="text">Employee</p>
                    </div> 
                </div>
                <div className="col-md-3 col-6">
                    <div className="single-analysis-counter mt-30 wow fadeIn">
                        <span className="count"><span className="counter">9970</span><span className="plus">+</span></span>
                        <p className="text">Coffee Consumed</p>
                    </div> 
                </div>
            </div> 
        </div> 
    </div> 
</section>
    );
}

export default Analysis
