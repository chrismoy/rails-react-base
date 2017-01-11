import React, { Component } from 'react';
import './Range.css';

class Range extends Component {
  constructor(props) {
    super(props);

    this.value = this.props.currentVal;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e.target.value);
  }

  render() {

    return (
      <input
        type="range"
        className="range__slider"
        min={this.props.minVal}
        max={this.props.maxVal}
        step={this.props.step}
        onChange={this.handleChange} />
    );
  }
}

export default Range;
