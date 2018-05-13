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
        .intro {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          align-items: center;
          height: 300px;
          width: 900px;
        }
        p {
          margin-left: 20px;
          margin-right: 20px;
          font-family: 'Playfair Display', serif;
          font-size: 20px;
        }
        .add-btn {
          border: 4px solid black;
          height: 40px;
          width: 40px;
          background: none;
          border-radius: 20px;
          font-family: 'Roboto', sans-serif;
          font-size: 20px;
        }
        .keg-list-container {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .add-keg {
          margin-bottom: 40px;
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
            <p>Welcome! Here is where you will keep track of your keg inventory. Each keg will be displayed here. If a keg runs out, you can hit the 'X' on the right to remove it.</p>
            <p>Add your first keg to get started!</p>
            <button className="add-btn" type="submit" onClick={AddKegRoute}>+</button>

          </div>
          :
          <div className="keg-list-container">
            <div className="add-keg">
              <button className="add-btn" type="submit" onClick={AddKegRoute}>+</button>
            </div>
            <div className="keg-display">
              {Object.keys(props.kegList).map(function(kegId) {
                const keg = props.kegList[kegId];
                return <Keg
                  brewery={keg.brewery}
                  name={keg.name}
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
