import "./styles/AcademicCardStyle.css";
import PropTypes from "prop-types";

const AcademicCard = ({ school, degree, dates }) => {
  return (
    <div className="academic-card">
      <h3 className="degree">{degree}</h3>
      <span className="school">{school}</span>
      <p className="dates">{dates}</p>
    </div>
  );
};
AcademicCard.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
};

export default AcademicCard;
