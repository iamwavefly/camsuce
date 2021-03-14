import React from 'react';
import JoinForm from './partials/JoinForm';
import WelcomeScreen from './partials/WelcomeScreen';
import '../styles/Join__page.css';
function Join({ userCity }) {
  return (
    <div className="join__page">
      <JoinForm />
      <WelcomeScreen userCity={userCity} />
    </div>
  );
}

export default Join;
