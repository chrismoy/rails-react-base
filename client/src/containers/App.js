import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import PlacesIndex from './PlacesIndex';
import ResultsIndex from './ResultsIndex';
import UsersEdit from './UsersEdit';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appPosition: 0,
      contentPositionClass: "",
      foodPlaces: [],
      headerPositionClass: ""
    };

    this.changeAppPosition = this.changeAppPosition.bind(this);
  }

  componentDidMount() {
    this.setAppPosition();
  }

  changeAppPosition(position) {
    this.setState({ appPosition: position }, () => {
      this.setAppPosition();
    });
  }

  setAppPosition() {
    const position = this.state.appPosition;
    this.setState({
      contentPositionClass: `app__content--position-${position}`,
      headerPositionClass: `header__content--position-${position}`
    });
  }

  render() {
    return (
      <div className="Device">
        <div id="app">
          <div className={`app__content ${this.state.contentPositionClass}`}>
            <UsersEdit />
            <PlacesIndex />
            <ResultsIndex />
          </div>
          <Header
            headerPositionClass={ `${this.state.headerPositionClass}` }
            changeAppPosition={ this.changeAppPosition } />
        </div>
      </div>
    );
  }
}

export default App;
