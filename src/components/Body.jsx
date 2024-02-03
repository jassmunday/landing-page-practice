import React from 'react';

function Body() {
  return (
    <section className="body">
      <div className="left-section">
        <h2>Welcome to Manipur Edu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>Get Started</button>
      </div>
      <div className="right-section">
        <img src="images/bg1.png" alt='background image' width={500}></img>
      </div>
    </section>
  );
}

export default Body;
