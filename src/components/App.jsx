import React from 'react';
import Header from './Header';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <style global jsx>
        {`
          body {
            background: #ECEBE4;

          },


          `}

      </style>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={KegList} />
          <Route path='/AddKeg' component={AddKeg} />
          <Route path='/EditKeg' component={EditKeg} />
          <Route path='' component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
