import React from 'react';
import '../../styles//welcome__screen.css';

function WelcomeScreen({ userCity }) {
  return (
    <div className="welcome__screen">
      <h1>MEET {userCity.toUpperCase()} SINGLES!</h1>
      <p>
        If you're shy and single, we know your type and we got you covered,
        let's connect you with {userCity} singles now.
      </p>
      <a href="mailto:iamwavefly@gmail.com">CONTACT US</a>
    </div>
  );
}

export default WelcomeScreen;
