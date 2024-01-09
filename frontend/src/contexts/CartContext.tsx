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

  console.log(cartItems, "CART ITEMS");

  return (
    <>
      <CartContext.Provider value={{ cartItems, addToCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
