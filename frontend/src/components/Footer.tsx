import { Link } from "react-router-dom";
import "../style/footer.scss";

const Footer = () => {
  return (
    <>
      <div id="footerDiv">
        <Link to={"/"}>Home</Link>
      </div>
    </>
  );
};

export default Footer;
