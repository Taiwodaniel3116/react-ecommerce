import "./App.css";
import { Home } from "./component/Home.jsx";
import { Shop } from "./component/Shop.jsx";
import Cart from "./component/Cart.jsx";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./component/Checkout";
import { getItem, setItem } from "./utils/localStorage";

function App() {
  const [cartItems, setCartItems] = useState([]/* () => {
    const item = getItem("cartItems");
    return item;
  } */);
  // useEffect(() => {
  //   const item = getItem("cartItems");
  //   return item;
  // })

  useEffect(() => {
    setItem("cartItems", cartItems);
    console.log('Save cart')
  }, [cartItems]);

  //Add To Cart Functionality
  const addToCart = (product) => {
    const itemsInCart = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );

    if (itemsInCart) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.price * (item.quantity + 1),
          };
        }
        return item;
      });
      setCartItems(updatedItems);
      // alert("Item quantity has been updated in your cart.");
    } else {
      const newItem = {
        ...product,
        quantity: 1,
        totalPrice: product.price,
      };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
      // alert("Item has been added to your cart. \nModify the quantity in the cart page. Thank you!");
    }

    console.log(cartItems);
  }; //

  //Increment Item Quantity//
  function increaseQuanity(id) {
    const updateItem = [...cartItems];
    updateItem[id].quantity += 1;

    updateItem[id].totalPrice = updateItem[id].price * updateItem[id].quantity;

    setCartItems(updateItem);
    console.log(updateItem);
  }

  // Decrement Item Quantity //
  function decreaseQuantity(id) {
    const updateItem = [...cartItems];
    if (updateItem[id].quantity <= 1) {
      alert(
        "Quantity will be 0, want to remove item from your cart? \n Use the Remove button below."
      );
    } else {
      updateItem[id].quantity -= 1;
      setCartItems(updateItem);
      console.log("decreased");
    }
  }

  // Cart Total Quantity //
  const totalQuantity = cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);

  // Remove Item //
  function removeItem(id) {
    const updateItem = cartItems.filter((_, cartItem) => cartItem !== id);
    setCartItems(updateItem);

    console.log("Item Removed");
  }

  // Total Price Calculation//
  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0); //Array initial value

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home totalQuantity={totalQuantity} />} />
          <Route
            path="/shop"
            element={
              <Shop
                addToCart={addToCart}
                totalQuantity={totalQuantity}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                totalQuantity={totalQuantity}
                increaseQuanity={increaseQuanity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
                totalPrice={totalPrice}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cartItems}
                setCartItems={setCartItems}
                totalQuantity={totalQuantity}
                increaseQuanity={increaseQuanity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
                totalPrice={totalPrice}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
