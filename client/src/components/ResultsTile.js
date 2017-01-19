import React, { Component } from 'react';
import './ResultsGrid.css';
import Image from './Image';

class ResultsTile extends Component {

  render() {

    const image = this.props.result.image;
    const title = this.props.result.title;
    const categories = this.props.result.categories.join(", ");

    return (
      <li
        className="results-grid__tile">
        <Image
          title={`${title} Thumbnail`}
          cssClasses="results-grid__tile__img"
          image={process.env.PUBLIC_URL + image} />
        <div className="results-grid__tile__info">
          <h3 className="results-grid__tile__title">{title}</h3>
          <p className="results-grid__tile__categories">{categories}</p>
        </div>
      </li>
    );
  }
}

export default ResultsTile;
