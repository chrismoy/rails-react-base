import React, { Component } from 'react';
import './Page.css';
import CardStack from '../components/CardStack';
import PlacesFooter from '../components/PlacesFooter';

class PlacesIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodPlaces: []
    };
  }

  render() {
    return (
      <div className="page page--places-index">
        <CardStack />
        <PlacesFooter />
      </div>
    );
  }
}

export default PlacesIndex;
