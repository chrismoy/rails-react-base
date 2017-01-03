import React, { Component } from 'react';
import Client from '../middleware/Client';
import Card from './Card';
import './CardStack.css';

class CardStack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodPlaces: []
    };

    const _this = this;

    Client.fetchGet(1)
      .then(function(data) {
        _this.setState({
          foodPlaces: data
        });
      });
  }

  render() {

    return (
      <ul className="card-stack">
      {
        this.state.foodPlaces.map((place, idx) => (
          <Card subject={place} key={place.yelp_id}/>
        ))
      }
      </ul> 
    );
  }
}

export default CardStack;
