import React from "react";
import {Button} from '../components/Button';

export default function Footer() {

    return(
        <div className="footer">
            <div className="inner-footer">
                <h2>Join the Adventure newsletter to recive our best vacation deals</h2>
                <Button
                    
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                    Connect
                </Button>
            </div>
        </div>
    )

}