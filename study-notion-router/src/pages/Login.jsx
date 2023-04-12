import React from 'react';
import Template from '../components/Template';
import loginImage from '../assets/login.png';

const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Template
        title="Welcome to Login page"
        desc1="login description one"
        desc2="login description two"
        image={loginImage}
        type="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
