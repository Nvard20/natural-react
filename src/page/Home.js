import React, { useState,useEffect } from 'react';
import Main from '../components/Main';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export default function Home() {


  
    return (

        <div className='box'>         
             <Main/>
             <Cards/>
             <Footer/>
         </div>
    )
}
