import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


/**
 * Creation du composant SharedLayout 
 * Partage du même contenu dans chaque page (Header et Footer)
 * @returns {JSX.Element} Composant SharedLayout
 */
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