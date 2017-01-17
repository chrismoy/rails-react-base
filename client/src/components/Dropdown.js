import React, { Component } from 'react';
import './Dropdown.css';
import DropdownCaret from './img/dropdownIcon.svg';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dropdownPosition: "closed",
      dropdownPositionClass: "dropdown--closed",
      title: this.props.listItems[0][0]
    }

    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown() {
    if (this.state.dropdownPosition === "open") {
      this.setState({
        dropdownPosition: "closed",
        dropdownPositionClass: "dropdown--closed"
      });
    } else {
      this.setState({
        dropdownPosition: "open",
        dropdownPositionClass: "dropdown--open"
      });
    }
  }

  render() {

    const caretProps = {
      alt: "dropdown",
      className: "dropdown__caret",
      src: DropdownCaret,
      title: `${this.props.title} Dropdown`
    }

    return (
      <div
        className={`dropdown ${this.state.dropdownPositionClass} ${this.props.cssClasses}`}
        onClick={this.toggleDropdown} >
        <h3 className="dropdown__title">
          {this.state.title}
          <img {...caretProps} />
        </h3>
        <ul className="dropdown__list">
          {
            this.props.listItems.map((listItem, idx) => (
              <li
                className="dropdown__list-item"
                key={idx} >
                {listItem}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Dropdown;
