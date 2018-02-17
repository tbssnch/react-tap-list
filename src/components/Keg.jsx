import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Keg(props){
  return (
    <div>
      <style jsx>
        {`
          .keg {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 200px;
            margin: 10px;
            border: 4px solid #000;

          },
          ul {
            list-style: none;
            padding: 0;

          },
          li {
            font-family: 'Open Sans Condensed', sans-serif;
          }
          button {
            border: 1px solid #000;
            background: none;
            width: 80px;
            height: 30px;
            margin-bottom: 5px;
}


          `}

      </style>
      <div className="keg">
        <ul>
          <li>Name: {props.name}</li>
          <li>Brewery: {props.brewery}</li>
          <li>Price: {props.price}</li>
          <li>ABV: {props.abv}</li>
          <li>IBU: {props.ibu}</li>
          <li><button><Link to="/editkeg">Edit Keg</Link></button></li>
          <button onClick={() => {props.onDeleteKeg(props.kegId);}}>Remove Keg</button>
        </ul>
      </div>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  ibu: PropTypes.string.isRequired,
  kegId: PropTypes.string.isRequired,
  onDeleteKeg: PropTypes.func
};

export default Keg;
