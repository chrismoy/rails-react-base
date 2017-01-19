import React, { Component } from 'react';

class DropdownTile extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.title);
  }

  render() {

    const title = this.props.title;

    return (
      <li
        className="dropdown__list-item"
        onClick={this.handleClick}
        title={title} >
        {title}
      </li>
    );
  }
}

export default DropdownTile;
