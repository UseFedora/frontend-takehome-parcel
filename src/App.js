import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import SearchScreen from './containers/searchScreen';
import SavedScreen from './containers/savedScreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/saved" component={SavedScreen} />
        <Route exact path="/" component={SearchScreen} />
      </Fragment>
    );
  }
}

export default App;
