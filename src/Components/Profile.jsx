import "./styles/ProfileStyle.css";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

function Profile({ showIntro }) {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveButton = () => {
    if (location.pathname === "/portfolio") {
      return "portfolio";
    }
    if (location.pathname === "/resume") {
      return "resume";
    }
    return "";
  };

  const handleButtonClick = (path) => {
    navigate(path);
  };

  const activeButton = getActiveButton();

  return (
    <>
      <div className="info-container">
        <img
          className="image"
          src="/src/imgs/headshot.png"
          alt="headshot"
        ></img>
        <h1 className="name">Amanda Azevedo</h1>
        <h3 className="job-title">UX/UI Designer</h3>
        {showIntro && (
          <p className="job-intro">
            Committed to the quality of the user experience, I always seek to
            translate their needs into intuitive and seamless solutions. My
            creative process involves everything from conceptualizing ideas to
            optimizing functionalities for various platforms. Dedicated to
            understanding business rules, I strive to convey the company&#39;s
            values in a simple and refined manner for users.
          </p>
        )}
        <div className="buttons-row">
          <button
            className={`buttons ${activeButton === "portfolio" ? "active" : ""}`}
            onClick={() => handleButtonClick("/portfolio")}
          >
            Portfolio
          </button>
          <button
            className={`buttons ${activeButton === "resume" ? "active" : ""}`}
            onClick={() => handleButtonClick("/resume")}
          >
            Resume
          </button>
        </div>
      </div>
    </>
  );
}

Profile.propTypes = {
  showIntro: PropTypes.bool.isRequired,
};

export default Profile;
