import React, { Component } from 'react';
import './Drawer.css';
import Caret from './img/caretIcon.svg';
import Image from './Image';

class Drawer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      drawerPosition: "open",
      drawerPositionClass: "drawer--open"
    }

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    if (this.state.drawerPosition === "open") {
      this.setState({
        drawerPosition: "closed",
        drawerPositionClass: "drawer--closed"
      });
    } else {
      this.setState({
        drawerPosition: "open",
        drawerPositionClass: "drawer--open"
      });
    }
  }

  render() {

    const imageProps = {
      cssClasses: "drawer__toggle",
      title: "Drawer Toggle",
      image: Caret,
      handleClick: this.toggleDrawer
    }

    return (
      <div className={`drawer ${this.state.drawerPositionClass}`}>
        <div className="drawer__header">
          <h2 className="drawer__title">{this.props.title}</h2>
          <Image {...imageProps} />
        </div>
        <div className="drawer__body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Drawer;
