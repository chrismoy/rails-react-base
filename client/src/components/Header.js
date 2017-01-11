import React, { Component } from 'react';
import './Header.css'
import HeaderIcon from './HeaderIcon'
import textLogo from './img/textLogo.svg';
import textLogoActive from './img/textLogoActive.png';
import diningIcon from './img/diningIcon.svg';
import diningIconActive from './img/diningIconActive.svg';
import settingsIcon from './img/settingsIcon.svg';
import settingsIconActive from './img/settingsIconActive.svg';

class Header extends Component {
  constructor() {
    super();
    this.changeAppPosition = this.changeAppPosition.bind(this);
  }

  changeAppPosition(position) {
    this.props.changeAppPosition(position);
  }

  render() {

    const headerIcons = [
      { image: settingsIcon, title: "Settings", cssClasses: "header__icon header__icon--0", position: 0 },
      { image: settingsIconActive, title: "Settings Active", cssClasses: "header__icon header__icon--0 header__icon--active", position: 0 },
      { image: textLogo, title: "Home", cssClasses: "header__icon header__icon--1", position: 1 },
      { image: textLogoActive, title: "Home Active", cssClasses: "header__icon header__icon--1 header__icon--active header__text-logo", position: 1 },
      { image: diningIcon, title: "Results", cssClasses: "header__icon header__icon--2", position: 2 },
      { image: diningIconActive, title: "Results Active", cssClasses: "header__icon header__icon--2 header__icon--active", position: 2 }
    ];

    return (
      <header className="header" >
        <div className={`header__content ${this.props.headerPositionClass}`}>
          { headerIcons.map((icon, index) => (
            <HeaderIcon
              cssClasses={icon.cssClasses}
              handleClick={this.changeAppPosition}
              image={icon.image}
              key={index}
              position={icon.position}
              title={icon.title}
            />
          ))}
        </div>
      </header>
    );
  }
}

export default Header;
