import React, { Component } from 'react';
import './Dropdown.css';
import DropdownCaret from './img/dropdownIcon.svg';
import DropdownTile from './DropdownTile';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dropdownPosition: "closed",
      dropdownPositionClass: "dropdown--closed",
      title: this.props.listItems[0].title
    }

    this.setTitle = this.setTitle.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  setTitle(title) {
    this.setState({
      title: title
    });
  }

  toggle() {
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
        onClick={this.toggle} >
        <h3 className="dropdown__title">
          {this.state.title}
          <img {...caretProps} />
        </h3>
        <ul
          className="dropdown__list"
          title={`${this.state.title} Selected`} >
          {
            this.props.listItems.map((listItem, idx) => (
              <DropdownTile
                className="dropdown__list-item"
                key={idx}
                handleClick={this.setTitle}
                title={listItem.title} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Dropdown;
