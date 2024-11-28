import PortfolioCard from "./PortfolioCard.jsx";
import "./styles/PortfolioStyle.css";

import portfolio from "../data/portfolio.js";

const PortfolioList = () => {
  return (
    <>
      <div className="portfolio-container">
        <h2 className="portfolio-page-title">My Portfolio</h2>
        <p className="portfolio-page-description">
          Explore some of my projects, from user interface and experience to
          prototyping and testing.
        </p>
        <div className="portfolio-cards">
          {portfolio.map((port, index) => (
            <PortfolioCard
              key={index}
              title={port.title}
              description={port.description}
              image={port.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default PortfolioList;
