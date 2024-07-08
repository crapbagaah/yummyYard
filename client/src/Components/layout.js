import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({children}) => {
    return(
        <>
        <div><Navbar /></div>
        <div className="body-layout">{children}</div>
        <div><Footer /> </div>   
    </>
    );
}

export default Layout;