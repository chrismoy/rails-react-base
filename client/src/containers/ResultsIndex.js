import React, { Component } from 'react';
import './Page.css';
import Drawer from '../components/Drawer';
import HorizontalGrid from '../components/HorizontalGrid';
import FilterBar from '../components/FilterBar';
import ResultsGrid from '../components/ResultsGrid';

const restaurants = [
  { title: "Green Street Smoked Meats", folder: "greenStreetSmokedMeats", filters: { likes: 0, distance: 0, price: 0 }, categories: ["American", "Barbeque"] },
  { title: "Oyster Bah", folder: "oysterBah", filters: { likes: 0, distance: 0, price: 0 }, categories: ["Seafood", "American"] },
  { title: "Parlor Pizza", folder: "parlorPizza", filters: { likes: 0, distance: 0, price: 0 }, categories: ["Pizza"] },
  { title: "Rainbow Cone", folder: "rainbowCone", filters: { likes: 0, distance: 0, price: 0 }, categories: ["Ice Cream"] },
  { title: "Rocks Lakeview", folder: "rocks", filters: { likes: 0, distance: 0, price: 0 }, categories: ["American"] },
  { title: "STK", folder: "stk", filters: { likes: 0, distance: 0, price: 0 }, categories: ["Steakhouse"] },
  { title: "Taco Joint", folder: "tacoJoint", filters: { likes: 0, distance: 0, price: 0 }, categories: ["Tacos", "Mexican"] }
];

const restaurantGenerator = () => {
  const basePath = "/restaurants/";
  const restaurantIndex = Math.floor(Math.random() * restaurants.length - 1) + 1;
  const imageIndex = Math.floor(Math.random() * 5) + 1;
  const restaurant = restaurants[restaurantIndex]

  const restaurantFolder = restaurant.folder;
  const imageName = `${restaurantFolder}${imageIndex}.jpg`;

  const imagePath = `${basePath}${restaurantFolder}/${imageName}`;
  const title = restaurant.title;
  const categories = restaurant.categories;
  const ratings = {
    likes: Math.ceil(Math.random() * 20),
    distance: Math.ceil(Math.random() * 9) + Math.round(Math.random() * 2) / 2,
    price: Math.ceil(Math.random() * 4)
  };

  const ret = {
    categories: categories,
    index: restaurantIndex,
    image: imagePath,
    ratings: ratings,
    title: title
  };

  return ret;
};

class ResultsIndex extends Component {
  constructor(props) {
    super(props);

    const recents = [];
    const results = [];

    for (let i = 0; i < 10; i++) {
      recents.push(restaurantGenerator());
    }

    for (let i = 0; i < 20; i++) {
      results.push(restaurantGenerator());
    }

    this.state = {
      recents: recents,
      results: results
    }
  }

  render() {

    const drawerProps = {
      title: "RECENT FINDS"
    };

    const horizontalGridProps = {
      contents: this.state.recents
    }

    const resultsGridProps = {
      results: this.state.results
    }

    return (
      <div className="page page--white page--results-index">
        <Drawer {...drawerProps} >
          <HorizontalGrid {...horizontalGridProps} />
        </Drawer>
        <FilterBar />
        <ResultsGrid {...resultsGridProps} />
      </div>
    );
  }
}

export default ResultsIndex;
