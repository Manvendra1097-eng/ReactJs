import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const SignupForm = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (formData.password !== formData.confirmPassword) {
      toast.error('Password and confirmed mismatch', {
        position: 'top-center',
      });
      return;
    }
    setIsLoggedIn(true);
    toast.success('Signed Up', {
      position: 'top-center',
    });
    navigate('/dashboard');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* firstname and lastName */}

        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              name="firstName"
              value={formData.firstName}
              type="text"
              placeholder="Enter First Name"
              onChange={changeHandler}
            />
          </label>

          {/* last name */}
          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              name="lastName"
              value={formData.lastName}
              type="text"
              placeholder="Enter Last Name"
              onChange={changeHandler}
            />
          </label>
        </div>

        {/* email */}
        <label>
          <p>
            Email<sup>*</sup>
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
        {/* confirm and password */}
        <div>
          <label>
            <p>
              Password<sup>*</sup>
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

          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              name="confirmPassword"
              value={formData.confirmPassword}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Enter confirm Password"
              onChange={changeHandler}
            />
            <span
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>
        </div>

        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignupForm;
