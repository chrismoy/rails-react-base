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

  render() {

    const headerIcons = [
      { image: settingsIcon, title: "Settings", cssClasses: "header__icon header__icon--0" },
      { image: settingsIconActive, title: "Settings Active", cssClasses: "header__icon header__icon--0 header__icon--active" },
      { image: textLogo, title: "Home", cssClasses: "header__icon header__icon--1" },
      { image: textLogoActive, title: "Home Active", cssClasses: "header__icon header__icon--1 header__icon--active header__text-logo" },
      { image: diningIcon, title: "Results", cssClasses: "header__icon header__icon--2" },
      { image: diningIconActive, title: "Results Active", cssClasses: "header__icon header__icon--2 header__icon--active" }
    ];

    return (
      <header className="header" >
        <div className={`header__content ${this.props.headerPositionClass}`}>
          { headerIcons.map((icon, index) => {
            return (
              <HeaderIcon
                cssClasses={icon.cssClasses}
                image={icon.image}
                key={index}
                title={icon.title}
              />
            );
          })}
        </div>
      </header>
    );
  }
}

export default Header;
