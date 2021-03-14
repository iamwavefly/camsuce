import React from 'react';
import '../../styles/join__form.css';
import Logo from '../../images/camsuce.svg';
import Lock from '../../images/icons/lock.svg';
import User from '../../images/icons/user.svg';
import Facebook from '../../images/icons/facebook.svg';
import LinkedIn from '../../images/icons/linkedin.svg';
import Twitter from '../../images/icons/twitter.svg';
import GooglePlus from '../../images/icons/google-plus.svg';

function JoinForm() {
  return (
    <div className="join__form">
      <h3>WELCOME TO</h3>
      <div className="logo">
        <img src={Logo} alt="camsuce logo" />
      </div>
      <p>Login or Register with CamSuce to get a things that interest you!</p>
      <form action="">
        <div className="form__input">
          <img src={User} alt="" />
          <input type="text" placeholder="Enter a Username" />
        </div>
        <div className="form__input">
          <img src={Lock} alt="" />
          <input
            type="password"
            name=""
            id=""
            placeholder="Securely a passport"
          />
        </div>
        <button>GET STARTED</button>
      </form>
      <p className="disclaimer">Make sure you read out terms of service</p>
      <span className="auth__divider">or</span>
      <p className="auth_title">Continue with social media</p>
      <div className="social_icons">
        <button>
          <img src={GooglePlus} alt="google plus auth icon" />
        </button>
        <button>
          <img src={Facebook} alt="facebook auth icon" />
        </button>
        <button>
          <img src={Twitter} alt="twitter auth icon" />
        </button>
        <button>
          <img src={LinkedIn} alt="linkedin auth icon" />
        </button>
      </div>
    </div>
  );
}

export default JoinForm;
