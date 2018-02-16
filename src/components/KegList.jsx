import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  console.log(props.kegList);
  return (
    <div className="keg-list">
      <style jsx>
        {`
        .keg-list {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin-top: 150px;
        }
        h1 {
          color: #334d5b;
          font-family: 'Righteous', cursive;
        }
        .keg-display {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

      `}
      </style>

      <h1>Tap List</h1>
      <div className="keg-display">
        {props.kegList.map((keg) =>
          <Keg name={keg.name}
            brewery={keg.brewery}
            price={keg.price}
            abv={keg.abv}
            ibu={keg.ibu}
            key={keg.id} />
        )}
      </div>


    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
