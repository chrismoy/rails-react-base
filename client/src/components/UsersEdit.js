import React, { Component } from 'react';
import './Page.css';
import CardStack from './CardStack';
import LastPlace from './LastPlace';

class UsersEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodPlaces: []
    };
  }

  render() {
    return (
      <div className="page">
        <CardStack />
        <LastPlace />
      </div>
    );
  }
}

export default UsersEdit;
