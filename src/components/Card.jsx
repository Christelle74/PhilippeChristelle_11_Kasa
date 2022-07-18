import React from 'react'
import { Link } from 'react-router-dom'





const Card = ({data}) => {
  
  return (
    
      <Link  to={`/appartPage/${data.id}`} className="card">
        <img src={data.cover} alt="" className="cover" />
        <div className='shadow'></div>
        <h3 className="title">{data.title}</h3>
      </Link>
  )
}
export default Card
