import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';


function KegList(props){

  function AddKegRoute(event){
    event.preventDefault();
    props.history.push('/AddKeg');
  }

  return (
    <div className="keg-list">
      <style jsx>
        {`
        a {
          text-decoration: none;
          font-family: 'Open Sans Condensed', sans-serif;
          color: black;
        }
        .keg-list {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin-top: 50px;
        }
        .logo-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 1000px;
        }
        .logo {
          display: flex;
          justify-content: center;
          width: 400px;
          height: 80px;
          background-color: #000;
        }
        .ta-logo {
          width: 100px;
        }
        .r-logo {
          width: 100px;
        }
        h1 {
          color: #ffff;
          font-family: 'Open Sans Condensed', sans-serif;
        }
        .keg-display {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

      `}
      </style>

      {
        (props.kegList === null)?
          <div className="intro">
            <p>Welcome!</p>
          </div>
          :
          <div>
            <div className="add-keg">
              <button type="submit" onClick={AddKegRoute}>Add</button>
            </div>
            <div className="keg-display">
              {Object.keys(props.kegList).map(function(kegId) {
                const keg = props.kegList[kegId];
                return <Keg name={keg.name}
                  brewery={keg.brewery}
                  price={keg.price}
                  abv={keg.abv}
                  ibu={keg.ibu}
                  key={kegId}
                  kegId={kegId}
                  onDeleteKeg={props.onDeleteKeg} />;
              })}
            </div>
          </div>
      }




    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onDeleteKeg: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(KegList);
