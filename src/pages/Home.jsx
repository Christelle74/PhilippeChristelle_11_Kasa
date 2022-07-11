import React from 'react'
import Apparts from '../components/Apparts'
import Banner from '../components/Banner'
import Image from "../assets/img/IMG.png"

const Home = () => {
  return (
     <div>
      <Banner image={Image} texte="Chez vous, partout et ailleurs"/>
      <Apparts/>
    </div>

  )
}

export default Home
