import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "././componant/css/index.css";
import "././componant/css/LineIcons.css";



import "././componant/js/Main.js";



import App from "./App";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
   <BrowserRouter>
     <Navigation/>
        <App/>
        <Footer/>
        
   </BrowserRouter>,
    document.getElementById('root')
);