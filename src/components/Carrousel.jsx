import React, { useState } from 'react';
import ArrowLeft from "../assets/img/ArrowLeft.svg";
import ArrowRight from "../assets//img/ArrowRight.svg";
import PropTypes from 'prop-types'



/**
 * Creation du composant carrousel avec navigation et compteur d'images
 * @param {string[]} [Props.images=[""]] 
 * @returns {JSX.Element} Composant Carrousel
 */
const Carrousel = ({images}) => {
    const [index, setIndex] = useState(0)

    const next =()=> {
        if (index === images.length - 1){
            setIndex(0)
        }else {
            setIndex(index + 1)
        }
    }

    const prev =()=> {
        if (index === 0){
            setIndex(images.length - 1)
        }else {
            setIndex(index - 1)
        }
    }

    return (
        <>
            <img className='mainImg' src={images[index]} alt="" />
            {images.length >1 && (
                <img onClick={prev} className='arrowLeft' src={ArrowLeft}/>
            )}
            {images.length >1 && (
            <img onClick={next} className='arrowRight' src={ArrowRight}/>
            )}
            <div className='counter'>{index+1}/{images.length}</div>
        </>
    );
};



Carrousel.propTypes = {
    images: PropTypes.array.isRequired
}

export default Carrousel;