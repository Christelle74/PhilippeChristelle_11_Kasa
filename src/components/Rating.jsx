import React from 'react';
import activeStar from "../assets/img/activeStar.png";
import greyStar from "../assets/img/greystar.png";
import PropTypes from 'prop-types'


/**
 * Creation du composant de notation
 * @param {object} [Props.rating={}] 
 * @returns {JSX.Element} Composant Stars
 */
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

Stars.propTypes = {
    rating: PropTypes.string.isRequired,
}
export default Stars;