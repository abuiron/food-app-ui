import React from 'react';
import '../styles/MainSection.css';

function MainSection() {
  return (
    <section className="main-section">
      <div className="red-overlay"></div>
      <div className="content-wrapper">
        <div className="mobile-container">
          <img src="mobile.png" alt="Mobile" className="mobile-image" />
          <video src="video.mp4" autoPlay loop muted playsInline className="mobile-video" />
        </div>
        <div className="text-container">
        <img src="logo.png" alt="Foodie Logo" className="logo" />
          <h1>Welcome to Foodie</h1>
          <p>
            At Foodie, we redefine convenience with our seamless food delivery service. Whether you're craving the flavors of home or exploring new culinary delights, Foodie brings it all to your doorstep.
          </p>
          <button className="main-btn">Join the Waitlist</button>
          <button className='main-btn-container'></button>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
