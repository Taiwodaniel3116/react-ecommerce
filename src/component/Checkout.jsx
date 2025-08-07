import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems, totalQuantity, totalPrice }) => {
  return (
    <>
      <nav className="text-white flex justify-end border-b-[1px] border-b-emerald-950 pb-2">
        <div>
          <Link to="/" className="pr-5 pl-3 text-green-300">
            Home
          </Link>
          <Link to="/shop" className="pr-5 links-hover-color links-active-color">
            Shop
          </Link>
          <Link to="/cart" className="links-hover-color links-active-color">Cart</Link>
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
      <h1>Checkout</h1>

      {/* ORDER SUMMARY */}
      <div className=" text-white h-max-content">
        <h3 className=" text-[20px] font-bold pt-3 pl-2 text-center font-mono">
          Order Summary
        </h3>

        <div className="grid grid-cols-2 mb-3 bg-emerald-600 w-[80%] py-5 px-2 rounded-3xl shadow-2xl shadow-emerald-700 md:w-100 m-auto">
          {cartItems.map((cartItem, id) => (
            <div
              key={id}
              className="border-b-[3.5px] border-r-[1px] rounded-4xl border-green-500"
            >
              <div className="flex justify-center">
                <img
                  src={cartItem.image}
                  alt="cart items"
                  className="checkout-img pl-1"
                />
              </div>
              <p className="text-center font-semibold text-[13px]">
                {cartItem.name} ({cartItem.quantity})
              </p>
              <p className="text-center font-semibold">
                ${cartItem.price * cartItem.quantity}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-5 bg-emerald-600 w-fit m-auto px-3 py-2 rounded-2xl">
          <div className="flex gap-20">
            <span className="text-white font-bold uppercase">Discount:</span>
            <span className="text-gray-300 font-bold uppercase line-through">
              $0.00
            </span>
          </div>
          <div className="flex gap-20">
            <span className="text-white font-bold uppercase">ORDER Total:</span>
            <span className="text-white font-bold border-b-[1px]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center gap-2 pt-3 mb-15 mt-5 font-mono">
          <a href="https://wa.me/2349027396272">
            <button className="bg-green-500 px-3 py-2 rounded-2xl hover:bg-green-400 active:bg-green-400">
              Complete Order via Whatsapp{" "}
            </button>
          </a>
          <a href="https://www.tiktok.com/@taiwo_odusanya">
            <button className="bg-black px-3 py-2 rounded-2xl hover:bg-gray-900 active:bg-gray-900">
              Complete Order via Tiktok{" "}
            </button>
          </a>
          <a href="www.instagram.com/taiwo_odusanya_73">
            <button className="bg-red-500 px-3 py-2 rounded-2xl hover:bg-red-400 active:bg-red-400">
              Complete Order via Instagram
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Checkout;
