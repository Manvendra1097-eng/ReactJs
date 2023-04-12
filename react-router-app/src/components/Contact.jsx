import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Contact Page</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Contact;
