import React from 'react';
import activeStar from "../assets/img/activeStar.png";
import greyStar from "../assets/img/greystar.png";

const Stars = ({rating}) => {

    const totalStars = [1,2,3,4,5];
    const activeStars = rating

    return (
        <div>
            {totalStars.map((index)=>(
                <img className="star" key={index} src={index < activeStars ? activeStar : greyStar} />
            ))}
        </div>
    );
};

export default Stars;