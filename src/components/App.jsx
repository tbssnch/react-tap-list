import React from 'react';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <p>App Works!</p>
      <KegList/>
      <AddKeg/>
      <EditKeg/>
    </div>
  );
}

export default App;
