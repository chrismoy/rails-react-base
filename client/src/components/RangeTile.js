import React, { Component } from 'react';
import './Range.css';
import Range from './Range';

class RangeTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // value: this.props.range[0]
      value: 2
    }

    this.handleChange = this.handleChange.bind(this);
    this.rangeLabel = this.rangeLabel.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  handleChange(value) {
    this.setValue(value);
  }

  rangeLabel(labelType, label) {
    const minVal = this.props.range[0];
    const value = this.state.value;
    const maxVal = this.props.range[1];

    switch(labelType) {
      case "number":
        return `${parseFloat(this.state.value).toFixed(1)}${label}`;
      case "rangeDown":
        if (value === maxVal) {
          return `${label.repeat(maxVal)}`;
        } else {
          return `${label.repeat(value)} - ${label.repeat(maxVal)}`;
        }
      case "rangeUp":
        if (value === minVal) {
          return `${label.repeat(minVal)}`;
        } else {
          return `${label.repeat(minVal)} - ${label.repeat(value)}`;
        }
      case "fraction":
        return `${parseFloat(this.state.value).toFixed(1)}/${this.props.range[1]}${this.props.label}`;
      default:
        return `${parseFloat(this.state.value).toFixed(1)}/${this.props.range[1]}`;
    }
  }

  setValue(value) {
    this.setState({
      value: value
    });
  }

  render() {

    const range = this.props.range;
    const labelType = this.props.labelType;
    const label = this.props.label;
    const rangeProps = {
      currentVal: this.state.value,
      handleChange: this.handleChange,
      minVal: range[0],
      maxVal: range[1],
      step: this.props.step
    }; 

    return (
      <div className="range__tile">
        <h3 className="range__title">{this.props.title}</h3>
        <h4 className="range__value">
          { this.rangeLabel(labelType, label) }
        </h4>
        <Range {...rangeProps} />
        <hr />
      </div>
    );
  }
}

export default RangeTile;
