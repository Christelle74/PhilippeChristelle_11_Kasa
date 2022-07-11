import React, { useState } from 'react';

const Dropdown =({title, text}) => {

const [isOpened,setIsOpened] = useState(false);

    return (
        <div className='dropdown'>
            <div className='dropdownHeader' onClick={()=>{ setIsOpened(!isOpened);}}>
                <div className='dropdownTitle'>{title}</div>
                <img src="/Vector.svg" alt="" className={`arrow ${isOpened}`}/>
            </div>

            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                isOpened && <div className="dropdownText">{text}</div>
            }
        </div>
    );
};

export default Dropdown;