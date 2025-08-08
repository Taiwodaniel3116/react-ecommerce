import React from "react";
import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  totalQuantity,
  increaseQuanity,
  decreaseQuantity,
  removeItem,
  totalPrice,
}) => {
  return (
    <div className="h-100">
      <nav className="text-white flex justify-end border-b-[1px] border-b-emerald-950 pb-2">
        <div>
          <Link to="/" className="pr-5 pl-3 text-green-300">
            Home
          </Link>
          <Link to="/shop" className="pr-5 links-hover-color links-active-color">
            Shop
          </Link>
          <Link to="/checkout" className="links-hover-color links-active-color">Checkout</Link>
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
      <h1>Your Cart</h1>

      <div className="w-max-content h-max-content bg-emerald-600 border-2 border-white pt-3 px-3 rounded-2xl md:w-100 m-auto">
        {cartItems.map((cartItem, id) => (
          <div
            key={id}
            className="flex gap-2 border-2 border-white rounded-lg mb-3"
          >
            <div className="shadow-2xl shadow-emerald-400 py-2">
              <img
                className="cart-img pl-1 hover:shadow-emerald-400 shadow-2xl active:shadow-emerald-400"
                src={cartItem.image}
                alt="cartItem"
              />
            </div>
            <div className="pt-3">
              <p className="cart-name-and-price">{cartItem.name}</p>
              <p className="cart-name-and-price ">
                ${cartItem.price * cartItem.quantity}
              </p>
              <p className="cart-name-and-price">
                Quantity: {cartItem.quantity}
              </p>
              
              <div className="mt-2">
                <button
                  className="text-white font-bold w-10 mr-3 rounded-full border-[1px] hover:bg-emerald-500 active:bg-emerald-500"
                  onClick={() => decreaseQuantity(id)}
                >
                  ➖
                </button>
                <button
                  className="text-white font-bold w-10 rounded-full border-[1px] hover:bg-emerald-500 active:bg-emerald-500"
                  onClick={() => increaseQuanity(id)}
                >
                  ➕
                </button>
              </div>
              <div>
                <button
                  className="text-white mt-2 font-bold hover:text-gray-300 active:text-gray-300"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-around">
          <span className="text-white font-bold uppercase">Total:</span>
          <span className="text-white font-bold">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-7 w-fit h-max m-auto bg-emerald-800 shadow-2xs shadow-emerald-300 text-white px-6 py-2 rounded-full hover:bg-emerald-900 active:bg-emerald-900">
        <Link to="/checkout">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
