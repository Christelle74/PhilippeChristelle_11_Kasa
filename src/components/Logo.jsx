import React from 'react'
import logo from "../assets/img/logo.png"

const Logo = () => {
  return (
    <div className="logo">
      {/* les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src={logo} alt="logo kasa" />
    </div>
  )
}

export default Logo
