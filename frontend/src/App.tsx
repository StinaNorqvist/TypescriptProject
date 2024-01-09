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
import "./style/app.scss";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { UserProvider } from "./contexts/UserContext";

function Root() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Header />
          <Menu />
          <Outlet />
        </CartProvider>
      </UserProvider>
      {/* TEST TO PUT FOOTER OUTSIDE */}
      <Footer />
    </>
  );
}

export const App = () => {
  const router = createBrowserRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Clothing />, path: "/clothing" },
        { element: <Accessories />, path: "/accessories" },
        { element: <About />, path: "/about" },
        { element: <Cart />, path: "/cart" },
        { element: <Login />, path: "/login" },
        { element: <SignUp />, path: "/signup" },
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
};
export default App;
