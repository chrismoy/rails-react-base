// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import Client from './Client';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodPlaces: []
    };

    this.clicker = this.clicker.bind(this);
  }

  clicker() {

    const _this = this;

    Client.search(2)
      .then(function(data) {
        _this.setState({
          foodPlaces: data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>App</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ this.clicker } >
          Click For Food
        </button>
        <h2>{ this.state.foodPlaces.name }</h2>
      </div>
    );
  }
}

export default App;
