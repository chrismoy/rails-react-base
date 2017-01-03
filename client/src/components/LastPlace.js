import React, { Component } from 'react';
import './LastPlace.css';
import Image from './Image';
import gotoIcon from './img/gotoIcon.svg';

class LastPlace extends Component {

  render() {

    return (
      <footer className="last-place">
        <p className="last-place__text">
          Last Discovered:&nbsp;
          <b>Oyster Bah</b>
        </p>
        <Image image={gotoIcon} title="Goto Last Found" cssClasses="last-place__icon" />
      </footer>
    )
  }
}

export default LastPlace;
