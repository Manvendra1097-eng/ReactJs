import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../slices/CartSlice';
import { toast } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const items = useSelector((state) => state.cart.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  const removeCartHandler = (id) => {
    dispatch(removeFromCart(id));
    toast.error('Product removed from cart');
  };

  useEffect(() => {
    const price = items.reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(price.toFixed(2));
  }, [items]);

  return items.length > 0 ? (
    <div className="flex w-11/12 justify-center mt-2 p-4 md:p-0">
      <div className="w-2/3 md:w-1/2 flex flex-wrap">
        {items?.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col justify-start gap-2  p-4 h-[400px] w-[300px] rounded-md outline outline-slate-100">
              <p className="font-bold ">{item.title.slice(0, 50)}...</p>
              <div className="flex justify-center items-center h-[200px] ">
                <img src={item.image} className="h-full" />
              </div>
              <div className="flex justify-between items-center mt-auto">
                <p className="text-green-500 font-bold">{item.price}</p>
                <button
                  onClick={() => removeCartHandler(item.id)}
                  className="bg-slate-800 text-slate-200 text-sm rounded-md py-1 px-2"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-2 px-6">
        <div>
          <p className="text-green-600 font-extrabold text-2xl">
            Order Summary
          </p>
          <p>Your Order</p>

          <div className="mt-20">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-500">Total Amount</span>
              <span className="font-extrabold text-sm text-slate-600">
                {totalPrice}
              </span>
            </div>

            <div className="w-full">
              <button className="bg-green-600 py-1 px-3 w-full text-slate-100 text-xl font-semibold rounded-md">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-2 justify-center items-center h-[80vh]">
      <p className="text-semibold text-slate-400 font-bold ">
        No product in cart
      </p>
      <NavLink to={`/`}>
        <button className="px-3 py-1 bg-green-600 text-slate-100 text-lg font-semibold rounded-md">
          Shop Now
        </button>
      </NavLink>
    </div>
  );
};

export default Cart;
