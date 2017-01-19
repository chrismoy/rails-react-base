import React, { Component } from 'react';
import './ResultsGrid.css';
import ResultsTile from './ResultsTile';

class ResultsGrid extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {

    return (
      <ul className="results-grid">
        {
          this.props.results.map((result, idx) => (
            <ResultsTile
              key={idx}
              result={result} />
          ))
        }
      </ul>
    );
  }
}

export default ResultsGrid;
