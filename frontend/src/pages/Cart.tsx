import React from "react";
import Header from "../components/Header";
import { useCart } from "../contexts/CartContext";

function Cart(): JSX.Element {
  const { cartItems } = useCart();
  console.log(cartItems, "CARTITEMS");

  return (
    <>
      <Header />
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <p>Item name: {item.productname}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Cart;
