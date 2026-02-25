import { FiHeart } from "react-icons/fi";
import "./Footer.css";

function Footer({ ownerName }) {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} {ownerName}. Built with{" "}
        <FiHeart className="footer-heart" /> and React.
      </p>
    </footer>
  );
}

export default Footer;
