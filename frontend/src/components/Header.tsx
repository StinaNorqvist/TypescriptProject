import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../style/header.scss";

const Header = () => {
  return (
    <>
      <div>
        <Link to={"/"}>
          <img src={Logo} id="wrenLogo" alt="Logo" />
        </Link>
      </div>
    </>
  );
};

export default Header;
