import React, { Component } from 'react';
import './Header.css'
import Image from './Image';
import textLogo from './img/textLogo.svg';
import textLogoActive from './img/textLogoActive.png';
import diningIcon from './img/diningIcon.svg';
import diningIconActive from './img/diningIconActive.svg';
import settingsIcon from './img/settingsIcon.svg';
import settingsIconActive from './img/settingsIconActive.svg';

// const headerTabs = [
//   { title: "Header", cssClasses: "header__icon header__icon--0" }
// ];  

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(pos) {
    const position = parseInt(pos);
    console.log('click');
  }

  render() {

    return (
      <header className="header">
        <div className={`header__content ${this.props.headerPositionClass}`}>
          <Image
            image={settingsIcon}
            title="Settings"
            cssClasses="header__icon header__icon--0"
            onClick={this.handleClick(0)}
            data={{postion: 0}} />
          <Image
            image={settingsIconActive}
            title="Settings Active"
            cssClasses="header__icon header__icon--0 header__icon--active"
            onClick={this.handleClick(0)}
            data={{postion: 0}} />
          <Image
            image={textLogo}
            title="Home"
            cssClasses="header__icon header__icon--1"
            onClick={this.handleClick(1)}
            data={{postion: 1}} />
          <Image
            image={textLogoActive}
            title="Home Active"
            cssClasses="header__icon header__icon--1 header__icon--active header__text-logo"
            onClick={this.handleClick(1)}
            data={{postion: 1}} />
          <Image
            image={diningIcon}
            title="Results"
            cssClasses="header__icon header__icon--2"
            onClick={this.handleClick(2)}
            data={{postion: 2}} />
          <Image
            image={diningIconActive}
            title="Results Active"
            cssClasses="header__icon header__icon--2 header__icon--active"
            onClick={this.handleClick(2)}
            data={{postion: 2}} />
        </div>
      </header>
    );
  }
}

export default Header;
