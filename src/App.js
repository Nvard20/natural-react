import React, { useState ,useEffect,useHistory  } from 'react';
import './assets/css/style.css';
import './assets/css/media.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from  './routes';
import Header from './components/Header';

function App (){

    return(
       <Router>
        <Header/>

        
         {
           routes.map((route,index) => (
           
            <Route 
              key={index}
              path={route.path} 
              exact = {route.exact}
              component={route.component}
            />
           ))

         }
    
      </Router>
    
    
    );

}



 export default App;