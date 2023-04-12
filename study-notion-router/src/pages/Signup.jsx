import React from 'react';
import signupImage from '../assets/signup.png';
import Template from '../components/Template';

const Signup = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Template
        title="Welcome to Sign page"
        desc1="Signup description one"
        desc2="Signup description two"
        image={signupImage}
        type="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Signup;
