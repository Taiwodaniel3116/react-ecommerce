import React from "react";
import { products } from "../data/product";
import { Link } from "react-router-dom";

export const Shop = ({ addToCart, totalQuantity }) => {
  return (
    <>
      <nav className="text-white flex justify-end border-b-[1px] border-b-emerald-950 pb-2">
        <div>
          <Link to="/" className="pr-5 pl-3">
            Home
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
      <h1>Our Shop</h1>
      {/* <h2 className="text-white font-bold text-center mb-10">cart Items: {totalQuantity}</h2> */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {products.map((product) => (
          <div key={product.id}>
            <div className="pb-5 border-gray-100 border-2 shadow-2xl shadow-emerald-400">
              <div className="mt-2 shadow- shadow-emerald-400">
                <img className="shop-img" src={product.image} />
              </div>
              <p className="name-and-price">{product.name}</p>
              <p className="name-and-price">${product.price}</p>
              <div>{product.button}</div>

              <div className="flex items-center justify-center">
                <button
                  className="bg-green-400 px-9 py-1 rounded-full"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
