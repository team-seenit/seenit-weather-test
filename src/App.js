import React, { Component } from 'react';
import './App.css';

import Location from './containers/Location';
import Animation from './containers/background/Animation';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        < Animation />
        < Location />
      </div>
    )
  }
}
