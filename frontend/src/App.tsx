import React from "react";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Clothing from "./pages/Clothing";

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
          ],
        },
        { element: <Home />, path: "/" },
        { element: <Clothing />, path: "/clothing" },
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
