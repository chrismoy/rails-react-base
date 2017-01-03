import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import PlacesIndex from '../components/PlacesIndex';
import ResultsIndex from '../components/ResultsIndex';
import UsersEdit from '../components/UsersEdit';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appPosition: 2,
      contentPositionClass: "",
      foodPlaces: [],
      headerPositionClass: ""
    };
  }

  componentDidMount() {
    this.setState({
      contentPositionClass: `app__content--position-${this.state.appPosition}`,
      headerPositionClass: `header__content--position-${this.state.appPosition}`
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
            headerPositionClass={`${this.state.headerPositionClass}`} />
        </div>
      </div>
    );
  }
}

export default App;
