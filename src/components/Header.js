import React, { useEffect,useState } from 'react';
import {  Link, Switch,useHistory,NavLink } from "react-router-dom";

export default function Header() {

const [click,setClick] = useState(false);
const [navbar,setNavbar] = useState(false);
const handleClick = () => setClick(!click);
const closeMobile = () =>setClick(false);

const Changebackground = () =>{
   

    if( window.scrollY > 90 ) {
      
      
          setNavbar(true);
    }else{
        setNavbar(false);
    }
};
window.addEventListener('scroll',Changebackground);



    return (
        <div className={ navbar ? 'navbar active-navbar' : 'navbar'}>
          
            <div className="logo" > <NavLink to="/"  exact  className="logo-img"><img src="img/logo.png"/></NavLink></div>
            <ul className='list'>
        
                <li>
                    <NavLink to="/contacts" activeClassName="active-link" className="link">Contacts</NavLink>
                </li>
                
            </ul>
            <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-close' : ' fa fa-align-justify'} />
            </div>
          
                <ul className={click ? 'active-list' : 'noActive-list'} >
            
                    <li>
                        <NavLink to="/gallery"  className="link mob-link" onClick={closeMobile}>Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts"  className="link mob-link" onClick={closeMobile}>Contacts</NavLink>
                    </li>
                    
                </ul>
           
        </div>
    )
}
