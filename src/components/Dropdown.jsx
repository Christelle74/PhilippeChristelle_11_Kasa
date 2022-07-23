import React, { useState } from 'react';
import img from "../assets/img/Vector.svg"
import PropTypes from 'prop-types'



/**
 * Creation du composant Dropdown avec titre et texte et ouverture au click sur la flèche
 * La flèche pivote à l'ouverture 
 * @param {String} [Props.text=''] 
 * @param {String|object} [Props.title='']
 * @returns {JSX.Element} Composant Dropdown
 */
const Dropdown =({title, text}) => {

const [isOpened,setIsOpened] = useState(false);

    return (
        <div className='dropdown'>
            <div className='dropdownHeader' onClick={()=>{ setIsOpened(!isOpened);}}>
                <div className='dropdownTitle'>{title}</div>
                <img src={img} alt="" className={`arrow ${isOpened}`}/>
            </div>

            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                isOpened && <div className="dropdownText">{text}</div>
            }
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.any
}
export default Dropdown;