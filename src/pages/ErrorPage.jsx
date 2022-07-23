import React from 'react'
import { NavLink } from 'react-router-dom'


/**
 * Creation de la page d'erreur 404
 * avec lien de retour vers la page d'accueil 
 *  
 * @returns {JSX.Element} Composant ErrorPage
 */
const ErrorPage = () => {
  return (
    
      <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
   
  )
}

export default ErrorPage
