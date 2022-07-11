import React from 'react'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import Image from "../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"

const About = () => {
  return (
    <div>
      <Banner image={Image} />
      <div className='aboutContainer'>

            <Dropdown title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            <Dropdown title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Dropdown title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            <Dropdown title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        
        {/* /*<div className='dropdown'>
          <div className='dropdownHeader'>
            <h2 className='dropdownTitle'>Fiabilité</h2>
            <img src="/Vector.svg" alt="" className='arrow'/>
          </div>
          <p className='dropdownText'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </div>

        <div className='dropdown'>
          <div className='dropdownHeader'>
            <h2 className='dropdownTitle'>Respect</h2>
            <img src="/Vector.svg" alt="" className='arrow' />
          </div>
          <p className='dropdownText'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>

        <div className='dropdown'>
          <div className='dropdownHeader'>
            <h2 className='dropdownTitle'>Service</h2>
            <img src="/Vector.svg" alt="" className='arrow'/>
          </div>
          <p className='dropdownText'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </div>

        <div className='dropdown'>
          <div className='dropdownHeader'>
            <h2 className='dropdownTitle'>Responsabilité</h2>
            <img src="/Vector.svg" alt="" className='arrow'/>
          </div>
          <p className='dropdownText'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>*/}
      </div>
    </div>
  )
}

export default About
