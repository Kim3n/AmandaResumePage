import "/src/Components/styles/AdvancedPageStyle.css";

import Cover from "/src/imgs/portfolio/PlanfyCover.png";
import Challange from "/src/imgs/portfolio/PlanfyChallenges.png";
import ChallangeRow1 from "/src/imgs/portfolio/PlanfyChallengesRow1.png";
import ChallangeRow2 from "/src/imgs/portfolio/PlanfyChallengesRow2.png";
import ChallangeRow3 from "/src/imgs/portfolio/PlanfyChallengesRow3.png";
import ChallangeRow4 from "/src/imgs/portfolio/PlanfyChallengesRow4.png";
import Colors from "/src/imgs/portfolio/PlanfyColors.png";
import Uses1 from "/src/imgs/portfolio/PlanfyUses1.png";
import Uses2 from "/src/imgs/portfolio/PlanfyUses2.png";

function Planfy() {
  return (
    <div className="advanced-portfolio-page fade-in">
      <div className="header advanced-portfolio-page-section-white">
        <div className="advanced-portfolio-page-section">
          <img src={Cover} alt="Planfy Cover Image" />
          <h1 className="advanced-portfolio-page-title">
            Planfy - Personal Finances
          </h1>
          <h3 className="advanced-portfolio-page-small-title">
            UX/UI Designer and Researcher
          </h3>
          <p className="advanced-portfolio-page-text">
            An innovative financial planning and management application, the
            project embraces complex integration flows for both web and mobile,
            as well as the incorporation of investment systems and connections
            with partner companies. I&#39;m responsible for direct communication
            with stakeholders and clients, along with project implementation
            with a multidisciplinary team using the agile methodology. I am also
            in charge of the handoff to developers and data analysts.
          </p>
          <p className="advanced-portfolio-page-text">
            The app&#39;s research process as well as some of the features are
            classified and not fully displayed in my portfolio. However, if
            there is interest, I am open to demonstrating my creative process on
            this project.
          </p>
        </div>
      </div>

      <div className="advanced-portfolio-page-section-gray">
        <div className="advanced-portfolio-page-section">
          <h2 className="advanced-portfolio-page-sub-title">The challenges</h2>
          <p className="advanced-portfolio-page-text">
            Planfy is available in both in a website version and mobile app,
            each one focused on a different public, but integrated to connect
            Clients and Financial Advisors.
          </p>
          <p className="advanced-portfolio-page-text">
            The first challenge we faced was transforming spreadsheet, files and
            even handwritten work into a website that would suffice all needs
            from our Financial Advisors, including a course platform and drive
            to store files online. The goal was making Planfy the only tool they
            would need to attend their clients.
          </p>
          <div className="single-image-container">
            <img src={Challange} alt="Planfy Library" />
            <p className="image-description">
              The Planfy Library: important lessons, files and documents in our
              Financial Advisors&#39; journey.
            </p>
          </div>
          <div className="multi-image-container">
            <div className="multi-image">
              <img src={ChallangeRow1} alt="personal finances" />
              <img src={ChallangeRow2} alt="personal finances" />
              <img src={ChallangeRow3} alt="product hiring" />
              <img src={ChallangeRow4} alt="product hiring" />
            </div>
            <p className="image-description">
              Some of the mobile features: personal finances (1 and 2) and
              product hiring (3 and 4)
            </p>
          </div>
        </div>
      </div>

      <div className="advanced-portfolio-page-section-white">
        <div className="advanced-portfolio-page-section">
          <h2 className="advanced-portfolio-page-sub-title">Design System</h2>
          <p className="advanced-portfolio-page-text">
            A full foundation from color variables to prototyped components.
          </p>

          <div className="single-image-container">
            <img src={Colors} alt="Planfy Colour Gallery" />
            <p className="image-description">Planfy Colour Gallery</p>
          </div>
        </div>
      </div>

      <div className="advanced-portfolio-page-section-gray">
        <div className="advanced-portfolio-page-section">
          <h2 className="advanced-portfolio-page-sub-title">A range of uses</h2>
          <p className="advanced-portfolio-page-text">
            Creating different tools to support all of Planfy&#39;s uses was an
            incredible experience. We had to work with a variety of features,
            including commercial presentations, forms and more.
          </p>

          <div className="multi-image-container">
            <div className="multi-image">
              <img src={Uses1} alt="commercial presentation" />
              <img src={Uses2} alt="form" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planfy;
