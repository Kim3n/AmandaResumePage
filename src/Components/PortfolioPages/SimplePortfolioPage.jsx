import { useNavigate, useParams } from "react-router-dom";
import "/src/Components/styles/SimplePortfolioPageStyle.css";

import portfolio from "/src/data/portfolio.js";
import { useEffect } from "react";

//Since all the portfolio piece pages does not have a universal design this is used for the most basic ones and more complicated ones will have their own component

function SimplePortfolioPage() {
  const { title } = useParams();
  const navigate = useNavigate();

  const formattedTitle = title.replace(/-/g, " ");

  const project = portfolio.find(
    (item) => item.title.toLowerCase() === formattedTitle.toLowerCase(),
  );

  useEffect(() => {
    if (!project) {
      navigate("/404", { replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="simple-portfolio-page fade-in">
      {project.bigImage && (
        <img
          className="simple-portfolio-page-image"
          src={project.bigImage}
          alt={project.title}
        />
      )}
      {project.title && (
        <h1 className="simple-portfolio-page-title">{project.title}</h1>
      )}
      {project.subTitle && (
        <h2 className="simple-portfolio-page-subtitle">{project.subTitle}</h2>
      )}
      {project.longDescription && (
        <p className="simple-portfolio-page-description">
          {project.longDescription}
        </p>
      )}
    </div>
  );
}

export default SimplePortfolioPage;
