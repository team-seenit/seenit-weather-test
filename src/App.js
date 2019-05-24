import React, { Component } from 'react';
import './App.css';

import Location from './containers/Location';
import Animation from './containers/background/Animation';

export default class App extends Component {

  state = {
    lat: null,
    lng: null
  }

  handleLocationInput = locationQuery => {
    const { city, country } = locationQuery;
    const apiKey = 'AIzaSyBuFJWHFDt8qmZvZ44ljjknargpC2SXhTw'; 
    const apiQuery = city + ',+' + country;
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + apiQuery + '&key=' + apiKey)
      .then(resp => resp.json())
      .then(data => {
        const {lat, lng} = data.results[0].geometry.location;
        this.setState({
          lat,
          lng
        })
      })
  }

  render() {
    return (
      <div className="App">
        < Animation />
        < Location handleLocationInput={this.handleLocationInput} />
      </div>
    )
  }
}
