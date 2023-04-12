import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const LoginForm = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success('Logged In', {
      position: 'top-center',
    });
    navigate('/dashboard');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* email */}
        <label>
          <p>
            Email<sup>*</sup>{' '}
          </p>
          <input
            required
            name="email"
            value={formData.email}
            type="email"
            placeholder="Enter email"
            onChange={changeHandler}
          />
        </label>

        <label>
          <p>
            Password<sup>*</sup>{' '}
          </p>
          <input
            required
            name="password"
            value={formData.password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            onChange={changeHandler}
          />
          <span
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <button>Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
