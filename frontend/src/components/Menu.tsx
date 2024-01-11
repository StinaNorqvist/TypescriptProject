import { Link } from "react-router-dom";
import "../style/menu.scss";
import CartIcon from "../Icons/CartIcon";
import PersonIcon from "../Icons/PersonIcon";
import { useLoggedIn } from "../contexts/useLoggedIn";
import { useCart } from "../contexts/useCart";

const Menu = () => {
  const { loggedInUser, logout } = useLoggedIn();
  console.log(loggedInUser, "MENU LOGGED IN");
  const { cartItems } = useCart();

  return (
    <nav>
      <ul className="leftMenu">
        <li>
          <Link to="/" id="homeLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/clothing" id="clothingLink">
            Clothing
          </Link>
        </li>
        <li>
          <Link to="/accessories" id="accessoriesLink">
            Accessories
          </Link>
        </li>
        <li>
          <Link to="/about" id="aboutUsLink">
            About Us
          </Link>
        </li>
      </ul>
      <ul className="rightMenu">
        <li>
          <Link to="/login" id="loginLink">
            <PersonIcon />
          </Link>
        </li>
        <li>
          <Link to="/cart" id="cartLink">
            <CartIcon />
            <p id="cartAmount">{cartItems.length}</p>
          </Link>
        </li>
        <li>
          {loggedInUser ? (
            <button id="loginMenuButton" onClick={() => logout()}>
              Log out
            </button>
          ) : (
            <button id="loginMenuButton">
              <Link to="/login">Login</Link>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
