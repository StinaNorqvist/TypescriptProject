import React, { createContext, useContext, useState, ReactNode } from "react";
import { ICartProps } from "../interfaces/interfaces";

// CART CONTEXT
export const CartContext = createContext<ICartProps | undefined>(undefined);

// USE CART
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// CART PROVIDER
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = (productId: string) => {
    setCartItems((prevItems) => [...prevItems, productId]);
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
