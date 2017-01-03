import React, { Component } from 'react';
import Image from './Image';

class HeaderIcon extends Component {

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }

  render() {

    const cssClasses = this.props.cssClasses;
    const image = this.props.image;
    const title = this.props.title;
    const data = this.props.data;

    const imageProps = {
      alt: title,
      className: cssClasses,
      src: image,
      title: title
      data: data
    }

    return (
      <Image
        image={settingsIcon}
        title="Settings"
        cssClasses="header__icon header__icon--0"
        onClick={this.changePage}
        data={{postion: 0}} />
    );
  }
}

export default HeaderIcon;
