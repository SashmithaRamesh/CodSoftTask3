import React from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop.css";
import Illustration from "./illustration.png";
import Logo from "./logo.png";

const Desktop = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/desktop"); // Navigates to /desktop path
  };

  return (
    <div className="landing-container">
      {/* Left Section */}
      <div className="left-section">
        <img src={Logo} alt="App Logo" className="logo-image" />
        <h1 className="app-name">NourishNetwork</h1>
        <img
          src={Illustration}
          alt="Healthy food illustration"
          className="illustration"
        />
        <div className="left-text">
          <h2>Reducing Food Waste, One Meal at a Time</h2>
          <p><b>Join us in building a zero-waste food ecosystem</b></p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="top-left-text-group">
          <h3 className="title">Delicious foods</h3>
          <br></br>
          <p className="subtitle-below-title">
            Let us help you discover the best food from best restaurants.
          </p>
        </div>
        <div className="overlay">
          <p className="quote-text">
            “Every plate saved is a planet protected.”
          </p>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
          <p className="login-text">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
