import React from 'react'
import logo from "../assets/img/logo.png"


/**
 * Creation du composant Logo 
 * 
 * @returns {JSX.Element} Composant Logo
 */
const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo kasa" />
    </div>
  )
}

export default Logo
