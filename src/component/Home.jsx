import React from "react";
import { Link } from "react-router-dom";

export const Home = ({ totalQuantity }) => {
  return (
    <>
      <nav className="text-white flex justify-end border-b-[1px] border-b-emerald-950 pb-2">
        <div>
          <Link to="/shop" className="pr-5 pl-3">
            Shop
          </Link>
          <Link to="/cart" className="pr-5">
            Cart
          </Link>
          <Link to="/checkout">Checkout</Link>
        </div>
        <Link to="/cart" className="flex items-center relative ml-10">
          <img
            src="src/images/icons/cart-icon.png"
            alt="cart icon"
            className="w-8 h-auto mr-3 mt-2"
          />
          <div className="text-[13px] text-green-200 absolute left-[15px] top-0">
            {totalQuantity}
          </div>
        </Link>
      </nav>
      <h1>Home</h1>
      <h2 className="text-white text-center font-bold mt-10">
        Dear Customer, welcome to our Wonderful store!
        <br /> Please head to our 
        <Link to="/shop" className="pl-[5px] pr-[5px] underline text-emerald-300">
          Shop
          </Link>
         to check our different products. Thank
        you!
      </h2>
    </>
  );
};
