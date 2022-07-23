import React from 'react'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import Image from "../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"



/**
 * Creation de la page A propos rappelant les composants Banner et les Dropdowns
 * 
 * @returns {JSX.Element} Composant About
 */
const About = () => {
  return (
    <div className='main'>
      <Banner image={Image} />
      <div className='aboutContainer'>
            <Dropdown title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            <Dropdown title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Dropdown title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            <Dropdown title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </div>
    </div>
  )
}

export default About
