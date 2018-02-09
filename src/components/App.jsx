import React from 'react';
import Header from './Header';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
      </Switch>
    </div>
  );
}

export default App;
