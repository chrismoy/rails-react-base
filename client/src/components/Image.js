import React, { Component } from 'react';

class Image extends Component {

  render() {

    // Expects 'cssClasses' as a space-separated list

    const cssClasses = this.props.cssClasses;
    const image = this.props.image;
    const title = this.props.title;
    const data = this.props.data;

    const imageProps = {
      alt: title,
      className: cssClasses,
      src: image,
      title: title
    }

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        imageProps[`data-${key}`] = data[key];
      }
    }

    return (
      <img {...imageProps} />
    );
  }
}

Image.defaultProps = {
  cssClasses: '',
  title: ''
}

Image.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string
}

export default Image;
