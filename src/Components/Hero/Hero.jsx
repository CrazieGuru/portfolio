import React from "react";
import profile_img from "../../assets/profile-1.jpg";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {

  return (
      <div id="home" className="hero">
        <div className="profile-img">
          <img src={profile_img} alt="" />
        </div>
        <h1>
          <span>I'm Guru,</span> Frontend and Backend developer
        </h1>
        <p>
          I am a frontend and backend developer from chennai with 2+ years of
          experiance in multiple companies.
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with me
            </AnchorLink>
          </div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
  );
};

export default Hero;
