import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/CartSlice';
import { toast } from 'react-hot-toast';

const Product = ({ product }) => {
  const { id, title, price, description, category, image } = product;

  const items = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(addToCart(product));
    toast.success('Product added to cart');
  };

  const removeCartHandler = () => {
    dispatch(removeFromCart(id));
    toast.error('Product removed from cart');
  };

  return (
    <div
      className="flex flex-col justify-start gap-2  p-4 h-[400px] rounded-md outline outline-slate-100 hover:scale-105
    hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-200"
    >
      <p className="font-bold ">{title.slice(0, 50)}...</p>
      <p className=" text-sm  font-semibold">{description.slice(0, 100)}...</p>
      <div className="flex justify-center items-center h-[200px] ">
        <img src={image} className="h-full" />
      </div>
      <div className="flex justify-between items-center mt-auto">
        <p className="text-green-500 font-bold">{price}</p>
        {items.some((item) => item.id === id) ? (
          <button
            onClick={() => removeCartHandler()}
            className="bg-slate-800 text-slate-200 text-sm rounded-md py-1 px-2"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => addCart()}
            className="bg-slate-800 text-slate-200 text-sm rounded-md py-1 px-2"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
