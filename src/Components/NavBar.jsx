import { NavLink } from "react-router-dom";
import "./styles/NavBarStyle.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src="/src/imgs/logo.png" alt="logo" />
        </NavLink>
      </div>
      <div className="centered">
        <ul className="links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
