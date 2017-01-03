import React, { Component } from 'react';
import Image from './Image';

class HeaderIcon extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this);
  }

  render() {

    const cssClasses = this.props.cssClasses;
    const image = this.props.image;
    const title = this.props.title;

    const imageProps = {
      alt: title,
      cssClasses: cssClasses,
      image: image,
      handleClick: this.handleClick,
      title: title
    }

    return (
      <Image {...imageProps} />
    );
  }
}

export default HeaderIcon;
