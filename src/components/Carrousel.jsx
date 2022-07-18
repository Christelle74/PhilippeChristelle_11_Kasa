import React, { useState } from 'react';
import ArrowLeft from "../assets/img/ArrowLeft.svg";
import ArrowRight from "../assets//img/ArrowRight.svg";



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
            
            <img onClick={prev} className='arrowLeft' src={ArrowLeft}/>
            <img onClick={next} className='arrowRight' src={ArrowRight}/>
            
            <div className='counter'>{index+1}/{images.length}</div>
        </>
    );
};

export default Carrousel;