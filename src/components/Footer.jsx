import React from 'react'
import logo from "../assets/img/logoFooter.png"


/**
 * Creation du composant footer avec logo et copyright
 * 
 * @returns {JSX.Element} composant Footer
 */
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo kasa" />
      <p>© 2022 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
