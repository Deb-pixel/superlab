import React from 'react'
import Heroshape from "./assets/img/hero/header-shape.png";

function Innerbanner(props) {
    return (
        <div className="page-banner bg_cover">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="page-banner-content wow fadeInUp">
                    <h3 className="page-title">
                        {props.name}
                    </h3>
                </div> 
            </div>
        </div> 
    </div>
    <div class="header-shape innrerHeader" >
        <img src={Heroshape} alt="shape"/>
    </div> 
</div>
    );
}

export default Innerbanner
