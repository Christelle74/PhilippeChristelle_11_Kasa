import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'



/**
 * Creation du composant banner 
 * @param {object} [Props.data={}] 
 * @returns {JSX.Element} Composant Card
 */
const Card = ({data}) => {
  return (
      <Link  to={`/appartPage/${data.id}`} className="card">
        <img src={data.cover} alt="" className="cover" />
        <div className='shadow'></div>
        <h3 className="title">{data.title}</h3>
      </Link>
  )
}


Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card
