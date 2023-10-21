import React, { Component } from 'react'

import AboutBackground from "../Assets/about-background.png";
import BannerBackground from "../Assets/home-banner-background-2.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
                   <div className = "home-container">
                   <div className="home-banner-container">
            <div className="home-bannerImage-container">
              <img src={BannerBackground} alt="" />
            </div>
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Our Team
        </h1>
        <p className="primary-text">
          Restaurant Management System with Restful Api's, Microservice Architecture, React and MySQL
        </p>
        <p className="primary-text">
        COHDSE222F-063 - Lakshan Hewage
        COHDSE222F-071 - Kavinda Appuhamy
        COHDSE222F-062 - Thamalu Pabasara
        </p>
        <div className="about-buttons-container">
            <a href='https://www.nibm.lk'>
          <button className="primary-button">National Institute of Business Management</button></a>
          
        </div>
      </div>
    </div>
    </div>

                   </div>

        )
    }
}

export default UpdateEmployeeComponent
