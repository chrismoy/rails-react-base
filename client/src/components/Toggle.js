import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
  constructor() {
    super();

    this.uniqueId = this.uniqueId.bind(this);
  }

  uniqueId() {
    const min = Math.ceil(1000000);
    const max = Math.floor(9999999);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {

    const toggleId = `toggle--${this.uniqueId()}-${this.props.id}`;

    return (
      <div className="toggle">
        <input
          type="checkbox"
          className="toggle__checkbox"
          id={toggleId} />
        <label
          className="toggle__label"
          htmlFor={toggleId} >
        </label>
      </div>
    );
  }
}

export default Toggle;
