import "/src/Components/styles/AdvancedPageStyle.css";

import Cover from "/src/imgs/portfolio/PortfolioCover.png";
import Components from "/src/imgs/portfolio/PortfolioComp.png";
import Figma from "/src/imgs/portfolio/PortfolioFigma.png";

function ThisPortfolio() {
  return (
    <div className="advanced-portfolio-page fade-in">
      <div className="header advanced-portfolio-page-section-white">
        <div className="advanced-portfolio-page-section">
          <img src={Cover} alt="Portfolio Cover Image" />
          <h1 className="advanced-portfolio-page-title">
            Portfolio and Resume
          </h1>
          <h3 className="advanced-portfolio-page-small-title">
            UI Design and prototyping
          </h3>
          <p className="advanced-portfolio-page-text">
            Before actually making it into a website, I prototyped my portfolio
            on Figma, creating components and variables. At first, the idea was
            actually using Figma&#39;s Prototype Presentation mode as my
            portfolio. However, it could potentially become too heavy for some
            browers.
          </p>
        </div>
      </div>

      <div className="advanced-portfolio-page-section-gray">
        <div className="advanced-portfolio-page-section">
          <div className="advanced-portfolio-page-sidebyside">
            <div className=".advanced-portfolio-page-leftside">
              <h2 className="advanced-portfolio-page-sub-title">Components</h2>
              <p className="advanced-portfolio-page-text">
                For every project I take part in, big or small, I always start
                prototyping by creating all the needed components first. This
                practice is extremely important for better efficiency.
              </p>
            </div>
            <div className=".advanced-portfolio-page-rightside">
              <div className="single-image-container">
                <img src={Components} alt="Portfolio Components" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="advanced-portfolio-page-section-white">
        <div className="advanced-portfolio-page-section">
          <div className="advanced-portfolio-page-sidebyside">
            <div className=".advanced-portfolio-page-leftside">
              <h2 className="advanced-portfolio-page-sub-title">
                Figma prototype
              </h2>
              <p className="advanced-portfolio-page-text">
                Feel free to navigate on my Figma prototype, including the
                carrousel component.
              </p>
              <div className="advanced-portfolio-page-leftside">
                <a
                  href="https://www.figma.com/proto/npEPImmDj7U05snyuiFqxJ/Portf%C3%B3lio?type=design&node-id=4-20388&t=0AZbql09LEdTyrqM-0&scaling=min-zoom&page-id=2%3A19692"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttons">Prototype</button>
                </a>
              </div>
            </div>
            <div className=".advanced-portfolio-page-rightside">
              <div className="single-image-container">
                <img src={Figma} alt="Figma Prototype" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThisPortfolio;
