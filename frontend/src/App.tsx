import React from "react";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Clothing from "./pages/Clothing";
import About from "./pages/About";
import Accessories from "./pages/Accessories";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { CartProvider } from "./contexts/CartContext";
import SignUp from "./pages/SignUp";

function Root() {
  return <Outlet />;
}

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      children: [
        {
          children: [
            { element: <Home />, path: "/" },
            { element: <Clothing />, path: "/clothing" },
            { element: <Accessories />, path: "/accessories" },
            { element: <About />, path: "/about" },
            { element: <Cart />, path: "/cart" },
            { element: <Login />, path: "/login" },
            { element: <SignUp />, path: "/signup" },
            // ADD ACCESSORIES ID PATH?
            { element: <Item />, path: "/item/:id" },
          ],
        },
        { element: <Home />, path: "/" },
        { element: <Clothing />, path: "/clothing" },
        { element: <Accessories />, path: "/accessories" },
        { element: <About />, path: "/about" },
        { element: <Cart />, path: "/cart" },
        { element: <Login />, path: "/login" },
        { element: <SignUp />, path: "/signup" },

        // ADD ACCESSORIES ID PATH?
        { element: <Item />, path: "/item/:id" },
      ],
      element: <Root />,
    },
  ]);
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}
export default App;
