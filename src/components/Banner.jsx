import React from 'react';


const Banner = ({text, image}) => {

  return (
    <div className="banner">
      <img src={image} alt="" className="bannerImg" />
      {/* <p>{text !== '' ? <span>{text}</span> : ''}</p> 
      //ou*/}
      <p> {text !=='' && <span>{text}</span>}</p>
    </div>
  )
}

export default Banner
