import "./styles/ExperienceCardStyle.css";
import PropTypes from "prop-types";

const ExperienceCard = ({ company, role, dates, sections }) => {
  return (
    <div className="experience-card">
      <div className="left-column">
        <h3>{role}</h3>
        <span className="company-name">{company}</span>
        <p className="dates">{dates}</p>
      </div>
      <div className="right-column">
        {sections.map((section, index) => (
          <div key={index} className="section">
            {section.title && <p>{section.title}</p>}
            <ul className="responsibilities">
              {section.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default ExperienceCard;
