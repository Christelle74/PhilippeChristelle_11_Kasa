import React from 'react';
import PropTypes from 'prop-types'


/**
 * Creation du composant Tags
 * @param {string} [Props.name='name of tag'] 
 * @returns {JSX.Element} Composant Tags
 */
const Tags = ({name}) => {
    return (
        <div>
           {name} 
        </div>
    );
};

Tags.propTypes = {
    name: PropTypes.array.isRequired,
}

export default Tags;