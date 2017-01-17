import React, { Component } from 'react';
import './HorizontalGrid.css';
import Image from './Image';

class HorizontalGrid extends Component {

  render() {

    return (
      <div className="grid--horizontal">
        {
          this.props.contents.map((item, idx) => (
            <div className="grid--horizontal__item" key={idx} >
              <Image
                title={`${item.title} Thumbnail`}
                cssClasses="grid--horizontal__img"
                image={process.env.PUBLIC_URL + item.image} />
            </div>
          ))
        }
      </div>
    );
  }
}

export default HorizontalGrid;
