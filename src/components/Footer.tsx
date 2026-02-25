import { FiHeart } from "react-icons/fi";
import "./Footer.css";

interface FooterProps {
  ownerName: string;
}

function Footer({ ownerName }: FooterProps) {
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
