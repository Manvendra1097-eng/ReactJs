import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const clickHandler = () => {
    setIsLoggedIn(false);
    toast.success('Logged out', {
      position: 'top-center',
    });
  };
  return (
    <div className="flex items-center justify-evenly w-11/12 max-w-[1160px] py-4 mx-auto">
      <img src={logo} alt="logo" width={160} height={32} />
      <nav className="text-slate-100">
        <ul className="flex gap-4 items-center ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </nav>
      {/* login-signup-logout-dashboard */}
      <div className="flex gap-4 items-center text-slate-100">
        {!isLoggedIn && (
          <Link
            className="bg-slate-800 py-[8px] px-[12px] rounded-[8px] border-slate-700"
            to="/login"
          >
            Login
          </Link>
        )}
        {!isLoggedIn && (
          <Link
            className="bg-slate-800 py-[8px] px-[12px] rounded-[8px] border-slate-700"
            to="/signup "
          >
            Sign Up
          </Link>
        )}
        {isLoggedIn && (
          <Link
            className="bg-slate-800 py-[8px] px-[12px] rounded-[8px] border-slate-700"
            to="/"
            onClick={clickHandler}
          >
            Logout
          </Link>
        )}
        {isLoggedIn && (
          <Link
            className="bg-slate-800 py-[8px] px-[12px] rounded-[8px] border-slate-700"
            to="/dashboard"
          >
            Dashboard
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
