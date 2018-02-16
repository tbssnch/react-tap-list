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
            border: 4px solid #334d5b;

          },
          ul {
            list-style: none;
            padding: 0;

          },
          li {
            font-family: 'Roboto', sans-serif;
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
          <Link to="/editkeg">Edit</Link>
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
