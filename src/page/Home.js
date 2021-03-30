import React, { useState,useEffect } from 'react';
import Main from '../components/Main';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import {Aside,Div} from '../components/Asidestyle';

export default function Home() {


  
    return (

        <div className='box'>         
             <Main/>
             <Cards/>
             <Aside primary>Aside Elementss</Aside>
             <Div  >Div's Elements </Div>
             <Footer/>
           
         </div>
    )
}
