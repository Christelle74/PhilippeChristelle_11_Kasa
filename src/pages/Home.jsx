import React from 'react'
import AppartsGallery from '../components/AppartsGallery'
import Banner from '../components/Banner'
import Image from "../assets/img/IMG.png"


/**
 * Creation de la page d'accueil avec récupération des composants Banner et AppartsGallery
 * 
 * @returns {JSX.Element} composant Home
 */
const Home = () => {
  return (
    <div className='main'>
      <Banner image={Image} text="Chez vous, partout et ailleurs"/>
      <AppartsGallery/>
    </div>

  )
}

export default Home
