import React from 'react';
import "../node_modules/bootstrap/js/src/collapse.js";
import "../node_modules/bootstrap/js/src/carousel.js";






import { Route, Switch } from "react-router-dom";

import Home from "./componant/page/Home";
import About from "./componant/page/About";
import Course from "./componant/page/Course";
import Team from "./componant/page/Team";
import Contact from "./componant/page/Contact";
import LoginForm from "./componant/page/LoginForm";
import Errorpage from "./componant/page/Errorpage";








function App() {
    return (
       <>       
       <switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/home" component={Home} />
           <Route exact path="/about" component={About} />
           <Route exact path="/course" component={Course}/>
           <Route exact path="/team" component={Team}/>
           <Route exact path="/contact" component={Contact}/>
           <Route exact path="/login" component={LoginForm}/>
           <Route exact component={Errorpage}/>
       </switch>
      
       
       </>
    );
};
export default App