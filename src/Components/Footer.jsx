import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./styles/FooterStyle.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
      <ul className="footer-socials">
        <li>
          <a href="https://www.instagram.com/festiveblossom/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/amandaabaz/">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </footer>
  );
}
