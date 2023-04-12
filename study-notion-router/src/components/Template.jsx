import React, { useState } from 'react';
import frameImage from '../assets/frame.png';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Template = ({ image, type, title, desc1, desc2, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{desc1}</p>
        <p>{desc2}</p>
      </div>
      {/* left part */}

      {type === 'login' ? (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <SignupForm setIsLoggedIn={setIsLoggedIn} />
      )}

      {/* right part */}
      <div>
        <img src={frameImage} alt="frame image" loading="lazy" />
        <img src={image} alt="image" loading="lazy" />
      </div>
    </div>
  );
};

export default Template;
