import React from 'react'
import { NavLink } from 'react-router-dom' //différence entre navlink et link, avec navlink on peut mettre le style


/**
 * Creation du composant navigation avec liens vers pages d'accueil et A propos
 *  
 * @returns {JSX.Element} Composant NAvigation
 */
const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation
