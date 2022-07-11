import React from 'react'

const Banner = ({texte, image}) => {
  return (
    <div className="banner">
      <img src={image} alt="" className="bannerImg" />
      <p>{texte}</p>
    </div>
  )
}

export default Banner
