import React from 'react';
import Home from './page/Home';
import Gallery from './page/Gallery';
import Contacts from './page/Contacts';
export default[
    {
        path: "/",
        exact: true,
        component : ()=> <Home/>,


    },
   
    {
        path: "/gallery",
        component :()=> <Gallery/>,


    },
    {
        path: "/contacts",
        component :()=> <Contacts/>,


    },
]