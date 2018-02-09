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
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '150px'}}>
      <h1 style={{}}>Tap List</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
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
