import React from "react";
import { Link } from "react-router-dom";
import "../style/menu.scss";
import CartIcon from "../Icons/CartIcon";
import SearchIcon from "../Icons/SearchIcon";
import PersonIcon from "../Icons/PersonIcon";

function Menu(): JSX.Element {
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
          <PersonIcon />
        </li>
        <li>
          <SearchIcon />
        </li>
        <li>
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
