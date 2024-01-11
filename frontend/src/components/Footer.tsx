import "../style/footer.scss";
import TransparentLogo from "../assets/TransparentLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footerDiv">
        <div className="logoDiv">
          <img className="TLogo" src={TransparentLogo} alt="Logo" />
        </div>
        <ul className="menuDiv">
          <li>
            <Link to="/" className="menuItem">
              Home
            </Link>
          </li>
          <li>
            <Link to="/clothing" className="menuItem">
              Clothing
            </Link>
          </li>
          <li>
            <Link to="/accessories" className="menuItem">
              Accessories
            </Link>
          </li>
          <li>
            <Link to="/about" className="menuItem">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
