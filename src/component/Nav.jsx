import React from "react";
import { Link } from "react-router-dom";


const Nav = ({totalQuantity}) => {
  return (
    <>
      <nav className="text-white flex justify-between border-b-[1px] border-b-emerald-950 pb-2">
        <div>
          <Link to="/" className="pr-5 pl-3">
            Home
          </Link>
          <Link to="/cart" className="pr-5">
            Cart
          </Link>
          <Link to="/checkout">Checkout</Link>
        </div>
        <Link to="/cart" className="flex items-center relative">
          <img
            src="src/images/icons/cart-icon.png"
            alt="cart icon"
            className="w-8 h-auto mr-3 mt-2"
          />
          <div className="text-[13px] text-white absolute left-[15px] top-0">
            {totalQuantity}
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
