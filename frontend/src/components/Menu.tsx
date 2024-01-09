import { Link } from "react-router-dom";
import "../style/menu.scss";
import CartIcon from "../Icons/CartIcon";
import PersonIcon from "../Icons/PersonIcon";
import { useLoggedIn } from "../contexts/useLoggedIn";

const Menu = () => {
  const { loggedInUser, logout } = useLoggedIn();
  console.log(loggedInUser, "MENU LOGGED IN");

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
          <Link to="/accessories" id="AccessoriesLink">
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
          {loggedInUser ? (
            <button id="loginMenuButton" onClick={() => logout()}>
              Log out
            </button>
          ) : (
            <Link to="/login" id="loginMenuButton">
              <button id="loginMenuButton">Log in</button>
            </Link>
          )}
        </li>
        <li>
          <Link to="/login" id="loginLink">
            <PersonIcon />
          </Link>
        </li>
        <li>
          <Link to="/cart" id="cartLink">
            <CartIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
