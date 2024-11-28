import "./styles/PortfolioCardStyle.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const PortfolioCard = ({ title, description, image }) => {
  return (
    <Link to={`/portfolio/${slugify(title)}`} className="portfolio-link">
      <div className="portfolio-card">
        <img className="portfolio-img" src={image} alt={title} />
        <h1 className="portfolio-title">{title}</h1>
        <p className="portfolio-description">{description}</p>
      </div>
    </Link>
  );
};
PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PortfolioCard;
