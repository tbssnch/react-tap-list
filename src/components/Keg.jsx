import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <style jsx>
        {`
          .keg {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 600px;
            height: 75px;
            margin: 10px;
            border-radius: 10px;
            border: 4px solid black;
            background: none;

          },
          ul {
            list-style: none;
          }
          li {
            font-family: 'Playfair Display', serif;
            margin-left: 10px;
            margin-right: 10px;
          }
          button {
            border: 4px solid #000;
            border-radius: 20px;
            background: none;
            width: 40px;
            height: 40px;
            margin-bottom: 5px;
}


          `}

      </style>
      <div className="keg">
        <li>{props.brewery}</li>
        <li>{props.name}</li>
        <li>${props.price}</li>
        <li>ABV: {props.abv}%</li>
        <li>IBU: {props.ibu}</li>
        <button onClick={() => {props.onDeleteKeg(props.kegId);}}>X</button>

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
