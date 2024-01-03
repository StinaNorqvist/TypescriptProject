import React from "react";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Clothing from "./pages/Clothing";
import About from "./pages/About";
import Accessories from "./pages/Accessories";
import Item from "./pages/Item";

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
            // ADD ACCESSORIES ID PATH?
            { element: <Item />, path: "/item/:id" },
          ],
        },
        { element: <Home />, path: "/" },
        { element: <Clothing />, path: "/clothing" },
        { element: <Accessories />, path: "/accessories" },
        { element: <About />, path: "/about" },
        // ADD ACCESSORIES ID PATH?
        { element: <Item />, path: "/item/:id" },
      ],
      element: <Root />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
