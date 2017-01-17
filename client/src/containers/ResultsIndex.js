import React, { Component } from 'react';
import './Page.css';
import Drawer from '../components/Drawer';
import HorizontalGrid from '../components/HorizontalGrid';
import FilterBar from '../components/FilterBar';

const restaurantNames = [
  ["Green Street Smoked Meats", "greenStreetSmokedMeats"],
  ["Oyster Bah", "oysterBah"],
  ["Parlor Pizza", "parlorPizza"],
  ["Rainbow Cone", "rainbowCone"],
  ["Rocks Lakeview", "rocks"],
  ["STK", "stk"],
  ["Taco Joint", "tacoJoint"]
];

const restaurantGenerator = () => {
  const basePath = "/restaurants/";
  const restaurantIndex = Math.floor(Math.random() * restaurantNames.length - 1) + 1;
  const imageIndex = Math.floor(Math.random() * 5) + 1;

  const restaurantFolder = restaurantNames[restaurantIndex][1];
  const imageName = `${restaurantFolder}${imageIndex}.jpg`;

  const imagePath = `${basePath}${restaurantFolder}/${imageName}`;
  const title = restaurantNames[restaurantIndex][0];

  const ret = {
    title: title,
    image: imagePath
  };

  return ret;
};

class ResultsIndex extends Component {
  constructor(props) {
    super(props);

    const recents = [];

    for (let i = 0; i < 10; i++) {
      recents.push(restaurantGenerator());
    }

    this.state = {
      recents: recents
    }
  }

  render() {

    const drawerProps = {
      title: "RECENT FINDS"
    };

    const gridProps = {
      contents: this.state.recents
    }

    return (
      <div className="page page--white page--results-index">
        <Drawer {...drawerProps} >
          <HorizontalGrid {...gridProps} />
        </Drawer>
        <FilterBar />
      </div>
    );
  }
}

export default ResultsIndex;
