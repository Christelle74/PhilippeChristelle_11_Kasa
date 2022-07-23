import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'


/**
 * Creation du composant Header avec récupération des composants Logo et Navigation
 * 
 * @returns {JSX.Element} composant Header
 */
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header
