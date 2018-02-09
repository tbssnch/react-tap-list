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
    abv: '6.9%',
    ibu: '100'
  },
  {
    name: 'Born & Raised',
    brewery: 'No-Li Brewhouse',
    price: '$5',
    abv: '7%',
    ibu: '85'
  },
  {
    name: 'Breakside IPA',
    brewery: 'Breakside Brewery',
    price: '$5',
    abv: '6.2%',
    ibu: '70'
  }

];

function KegList(){
  return (
    <div>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brewery={keg.brewery}
          price={keg.price}
          abv={keg.abv}
          ibu={keg.ibu}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;
