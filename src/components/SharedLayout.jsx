import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';



const SharedLayout = () => {
    return (
    <> {/* react-fragment*/}
        <Header/>
        <Outlet/> {/* partage le même contenu à travers toutes les pages*/}
        <Footer/>
    </>
    )
}


export default SharedLayout