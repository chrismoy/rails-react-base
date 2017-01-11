import React, { Component } from 'react';
import './Toggle.css';
import Toggle from './Toggle'

class ToggleTile extends Component {

  render() {

    return (
      <div className="toggle__tile">
        <h3 className="toggle__title">{this.props.title}</h3>
        <Toggle />
        <hr />
      </div>
    );
  }
}

export default ToggleTile;
