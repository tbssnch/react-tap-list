import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    name: 'Pliny The Younger',
    brewery: 'Russian River Brewing',
    price: '$8',
    abv: '10.25% ABV',
    ibu: '90 IBU'
  },
  {
    name: 'C-Note',
    brewery: 'Lompoc Brewing',
    price: '$5',
    abv: '6.9% ABV',
    ibu: '100 IBU'
  },
  {
    name: 'Born & Raised',
    brewery: 'No-Li Brewhouse',
    price: '$5',
    abv: '7% ABV',
    ibu: '85 IBU'
  },
  {
    name: 'Breakside IPA',
    brewery: 'Breakside Brewery',
    price: '$5',
    abv: '6.2% ABV',
    ibu: '70 IBU'
  }

];

function KegList(){
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
        {masterKegList.map((keg, index) =>
          <Keg name={keg.name}
            brewery={keg.brewery}
            price={keg.price}
            abv={keg.abv}
            ibu={keg.ibu}
            key={index}/>
        )}
      </div>


    </div>
  );
}

export default KegList;
