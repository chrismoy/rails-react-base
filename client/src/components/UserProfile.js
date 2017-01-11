import React, { Component } from 'react';
import './UserProfile.css';
import ProfileImage from './img/profileImage.png';
import Image from './Image';

class UserProfile extends Component {

  render() {

    const imageProps = {
      cssClasses: "user-profile__img",
      image: ProfileImage,
      title: "Profile Picture"
    }

    return (
      <div className="user-profile">
        <Image {...imageProps} />
        <div className="user-profile__data">
          <h2 className="user-profile__name">Chris</h2>
          <h3 className="user-profile__occupation">Software Engineer</h3>
          <h3 className="user-profile__education">University of Illinois at Urbana-Champaign</h3>
        </div>
        <button className="user-profile__reset-btn">
          RESET FINDS 
        </button>
      </div>
    );  
  }
}

export default UserProfile;
