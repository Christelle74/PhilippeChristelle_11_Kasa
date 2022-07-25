import React from 'react';
import PropTypes from 'prop-types'


/**
 * Creation du composant Tags
 * @param {object} [Props.name='name of tag'] 
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
    name: PropTypes.object.isRequired,
}

export default Tags;