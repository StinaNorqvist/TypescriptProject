import React from "react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
// WHY THIS WRONG:
import Logo from "../assets/Logo.png";
import "../style/header.scss";

function Header(): JSX.Element {
  return (
    <>
      <div>
        <Link to={"/"}>
          <img src={Logo} id="wrenLogo" alt="Logo" />
        </Link>
      </div>
      <Menu />
    </>
  );
}

export default Header;
