import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <ul>
        <li>{props.name}</li>
        <li>{props.brewery}</li>
        <li>{props.price}</li>
        <li>{props.abv}</li>
        <li>{props.ibu}</li>
      </ul>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  ibu: PropTypes.string.isRequired
};

export default Keg;
