import React from 'react'

const Logo = () => {
  return (
    <div className="logo">
      {/* les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src="./logo.png" alt="logo kasa" />
    </div>
  )
}

export default Logo
