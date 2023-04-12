import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>About Page</p>
      <button onClick={() => navigate('/contact')}>Go to Contact</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default About;
