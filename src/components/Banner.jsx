import React from 'react';
import PropTypes from 'prop-types'


/**
 * Creation du composant banner 
 * @param {String} [Props.text=''] 
 * @param {String} [Props.image='']
 * @returns {JSX.Element} Composant Banner
 */
const Banner = ({text, image}) => {
  return (
    <div className="banner">
      <img src={image} alt="" className="bannerImg" />
      {/* <p>{text !== '' ? <span>{text}</span> : ''}</p> 
      //ou*/}
       {text !=='' && <p><span>{text}</span></p>}
    </div>
  )
}


Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string
}


export default Banner
