import React from 'react';
import Header from './Header';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
  }

  render(){
    return (
      <div>
        <style global jsx>
          {`
          body {
            background: #f5f5f5;
            font-family: 'Roboto', sans-serif;

          }
          a {
            text-decoration: none;
          }


          `}

        </style>
        <div>
          <Header />
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
}

export default App;
