import React, { Component } from 'react';
import './Page.css';
import UserProfile from '../components/UserProfile';
import UserSettings from '../components/UserSettings';

class UsersEdit extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="page page--white page--users-edit">
        <UserProfile />
        <UserSettings />
      </div>
    );
  }
}

export default UsersEdit;
