import React, { createContext, useState, ReactNode } from "react";
import { ICartProps, IProducts } from "../interfaces/interfaces";

// CART CONTEXT
export const CartContext = createContext<ICartProps | undefined>(undefined);

// CART PROVIDER
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<IProducts[]>([]);

  const addToCart = (product: IProducts) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (product: IProducts) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== product));
  };

  console.log(cartItems, "CART ITEMS");

  return (
    <>
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
