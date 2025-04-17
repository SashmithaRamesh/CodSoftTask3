import React from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop.css";
import Illustration from "./illustration.png";
import Logo from "./logo.png";

const Desktop = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/desktop");
  };

  return (
    <div className="getstart-landing-container">
      {/* Left Section */}
      <div className="getstart-left-section">
        <img src={Logo} alt="App Logo" className="getstart-logo-image" />
        <h1 className="getstart-app-name">NourishNetwork</h1>
        <img
          src={Illustration}
          alt="Healthy food illustration"
          className="getstart-illustration"
        />
        <div className="getstart-left-text">
          <h2 className="getstart-left-title">Reducing Food Waste, One Meal at a Time</h2>
          <p className="getstart-left-subtitle">
            <b>Join us in building a zero-waste food ecosystem</b>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="getstart-right-section">
        <div className="getstart-top-left-text-group">
          <h3 className="getstart-title">Delicious foods</h3>
          <br />
          <p className="getstart-subtitle-below-title">
            Let us help you discover the best food from best restaurants.
          </p>
        </div>
        <div className="getstart-overlay">
          <p className="getstart-quote-text">
            “Every plate saved is a planet protected.”
          </p>
          <button className="getstart-get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
          <p className="getstart-login-text">
            Already have an account? Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
