import React, { Component } from 'react';
import './PlacesFooter.css';
import Image from './Image';
import gotoIcon from './img/gotoIcon.svg';

class PlacesFooter extends Component {

  render() {

    return (
      <footer className="footer--places">
        <p className="footer--places__text">
          Last Discovered:&nbsp;
          <b>Oyster Bah</b>
        </p>
        <Image image={gotoIcon} title="Goto Last Found" cssClasses="footer--places__icon" />
      </footer>
    )
  }
}

export default PlacesFooter;
