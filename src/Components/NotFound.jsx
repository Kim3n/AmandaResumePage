import { Link } from "react-router-dom";
import "./styles/ErrorStyle.css";

function NotFound() {
  return (
    <div className="error-container fade-in">
      <h1 className="error-title">404 - Page Not Found</h1>
      <p className="error-text">The page you're looking for doesn't exist.</p>
      <Link to="/">
        <button className="buttons">Go back to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
