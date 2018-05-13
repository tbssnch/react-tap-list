import React from 'react';
import Header from './Header';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import Error404 from './Error404';
import { v4 } from 'uuid';
import { Switch, Route } from 'react-router-dom';
import background from '../assets/tap_background.jpg';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: null,
    };
    this.handleAddKeg = this.handleAddKeg.bind(this);
    this.handleDeleteKeg = this.handleDeleteKeg.bind(this);
  }

  handleAddKeg(newKeg){
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleDeleteKeg(kegId){
    let newMasterKegList = this.state.masterKegList;
    delete newMasterKegList[kegId];
    this.setState({masterKegList: newMasterKegList});
  }


  render(){
    return (
      <div>
        <style global jsx>
          {`
          body {
            background-image: url(${background});
            font-family: 'Roboto', sans-serif;
            background-size: 1500px;
          }
          a {
            text-decoration: none;
          }


          `}

        </style>
          <Header />
          <Switch>
            <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList}
              onDeleteKeg={this.handleDeleteKeg} />} />
            <Route path='/AddKeg' render={()=><AddKeg onNewKeg={this.handleAddKeg} />} />
            <Route path='/EditKeg' component={EditKeg} />
            <Route path='' component={Error404} />
          </Switch>
        </div>
    );
  }
}

export default App;
