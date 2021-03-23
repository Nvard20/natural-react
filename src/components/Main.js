import React, { useState,useEffect ,useInterval} from 'react';
import { Button } from './Button';

export default function Main() {

    useEffect(() => {
        const Alert = () => {
    
            alert('Get Started');
        };
        let el = document.getElementById('el');
        el.addEventListener("click", Alert,false);
       
    });

    return( 
        <div className="main">
            <div className="main-home">
            
                <h1 className="title"   >Adventure Awaits</h1>
                <p>What are you waiting for?</p>
                <div className="heroButtons">
                <Button
                    id='el'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                    GET STARTED
                </Button>
                <Button
                  
                    buttonStyle='btn--test'
                    buttonSize='btn--large'
                    >
                  WATCH TRAILER
                </Button>
                </div>
                
            </div>
        </div>
);
}
  
  