import React from "react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <>
      <div>
        <Link to={"/"}>
          <h1>Wren</h1>
        </Link>
        <Menu />
      </div>
    </>
  );
}

export default Header;
