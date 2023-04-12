import React, { useEffect, useState } from 'react';
import { BsCartFill } from 'react-icons/bs';
import logo from '../assets/svg/logo-color.svg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart.cartItems);
  const [cartNumber, setCartNumber] = useState(0);

  useEffect(() => {
    console.log(items);
    setCartNumber(items.length);
  }, [items]);

  return (
    <div className="bg-slate-900">
      <nav className="flex items-center justify-around py-2">
        <NavLink to={`/`}>
          <img className="w-[60px] h-[60px]" src={logo} />
        </NavLink>
        <div className="text-slate-50 flex items-center gap-4">
          <NavLink to={`/`}>
            <span className="font-bold">Home</span>
          </NavLink>
          <NavLink to={`/cart`}>
            <div className="relative">
              <BsCartFill className="text-2xl" />
              {items.length > 0 && (
                <span className="absolute -top-2 right-1 h-4 w-4 flex justify-center items-center animate-bounce bg-green-700 text-slate-100 rounded-full font-bold text-sm">
                  {cartNumber}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
