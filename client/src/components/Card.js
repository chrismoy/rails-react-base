import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {

    return (
      <li className="card" >
        <div className="card__img"></div>
        <div className="card__info">
          Seafood
        </div>
      </li>
    );
  }
}

export default Card;
