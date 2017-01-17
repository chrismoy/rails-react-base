import React, { Component } from 'react';

class HeaderIcon extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.position);
  }

  render() {

    const cssClasses = this.props.cssClasses;
    const image = this.props.image;
    const title = this.props.title;

    const imageProps = {
      alt: title,
      className: cssClasses,
      onClick: this.handleClick,
      src: image,
      title: title
    };

    return (
      <img {...imageProps} />
    );
  }
}

export default HeaderIcon;
