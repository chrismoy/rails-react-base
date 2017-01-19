import React, { Component } from 'react';
import './FilterBar.css';
import Dropdown from './Dropdown';

class FilterBar extends Component {

  render() {

    const dropdownLeftProps = {
      cssClasses: "filter-bar__dropdown--left",
      listItems: [
        { title: "ALL" },
        { title: "DELIVERY" }
      ],
      title: "Dining Type"
    }

    const dropdownRightProps = {
      cssClasses: "filter-bar__dropdown--right",
      listItems: [
        { title: "Most Likes", filter: "likes" },
        { title: "Closest (mi)", filter: "closest" },
        { title: "Affordable", filter: "affordable" }
      ],
      title: "Data Filter"
    }

    return (
      <div className="filter-bar">
        <Dropdown {...dropdownLeftProps} />
        <Dropdown {...dropdownRightProps} />
      </div>
    );
  }
}

export default FilterBar;
