import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../style/header.scss";

const Header = () => {
  return (
    <>
      <Link to={"/"}>
        <img src={Logo} id="wrenLogo" alt="Logo" />
      </Link>
      <p id="logoText">Second hand clothing</p>
    </>
  );
};

export default Header;
