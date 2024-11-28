import "/src/Components/styles/AdvancedPageStyle.css";

import Cover from "/src/imgs/portfolio/CouplementCover.png";
import Research from "/src/imgs/portfolio/CouplementResearch.png";
import Colors from "/src/imgs/portfolio/CouplementColors.png";
import Proto from "/src/imgs/portfolio/CouplementProto.png";
import FullPrototype from "/src/imgs/portfolio/CouplementFullPrototype.png";
import Persona from "/src/imgs/portfolio/CouplementPersona.png";
import Thanks from "/src/imgs/portfolio/CouplementThanks.png";

function Couplement() {
  return (
    <div className="advanced-portfolio-page fade-in">
      <div className="header advanced-portfolio-page-section-gray">
        <div className="advanced-portfolio-page-section">
          <img src={Cover} alt="Couplement Cover Image" />
          <h1 className="advanced-portfolio-page-title">
            Couplement - Life Organizer
          </h1>
          <h3 className="advanced-portfolio-page-small-title">
            UX/UI Designer and Researcher
          </h3>
          <p className="advanced-portfolio-page-text">
            This project was developed throughout my UX/UI Designer course at
            Awari and involved various competencies during its execution, such
            as UX Research, Synthesis Artifacts (Persona, Empathy Maps, etc.),
            Prototyping, Usability Testing, Heuristic Analysis, Design Thinking,
            Wireframing, Accessibility, Design System etc. The intense use of
            illustration within apps is not common (and usually not
            recommended), but it was part of the challenge when creating this
            app!
          </p>
        </div>
      </div>

      <div className="advanced-portfolio-page-section-white">
        <div className="advanced-portfolio-page-section">
          <div className="advanced-portfolio-page-sidebyside">
            <div className=".advanced-portfolio-page-leftside">
              <h2 className="advanced-portfolio-page-sub-title">
                Research History on Miro
              </h2>
              <p className="advanced-portfolio-page-text">
                Planfy is available in both in a website version and mobile app,
                each one focused on a different public, but integrated to
                connect Clients and Financial Advisors.
              </p>
              <p className="advanced-portfolio-page-text">
                The first challenge we faced was transforming spreadsheet, files
                and even handwritten work into a website that would suffice all
                needs from our Financial Advisors, including a course platform
                and drive to store files online. The goal was making Planfy the
                only tool they would need to attend their clients.
              </p>
              <div className="advanced-portfolio-page-leftside">
                <a
                  href="https://miro.com/app/board/uXjVONmYXeg=/?share_link_id=862413653087"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttons">Miro Board</button>
                </a>
              </div>
            </div>
            <div className=".advanced-portfolio-page-rightside">
              <div className="single-image-container">
                <img src={Research} alt="Couplement Research" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="advanced-portfolio-page-section-gray">
        <div className="advanced-portfolio-page-section">
          <div className="advanced-portfolio-page-sidebyside">
            <div className=".advanced-portfolio-page-leftside">
              <h2 className="advanced-portfolio-page-sub-title">
                The Design System
              </h2>
              <p className="advanced-portfolio-page-text">
                This project included a basic Design System, which focused on
                the colors and fonts used within the application.
              </p>
            </div>
            <div className=".advanced-portfolio-page-rightside">
              <div className="single-image-container">
                <img src={Colors} alt="Design System" />
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
                Low-fidelity Prototype
              </h2>
              <p className="advanced-portfolio-page-text">
                The low-fidelity prototype was used on the first phase of the
                interviews and usability tests.
              </p>
            </div>
            <div className=".advanced-portfolio-page-rightside">
              <div className="single-image-container">
                <img src={Proto} alt="Low-fidelity Prototype" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="advanced-portfolio-page-section-gray">
        <div className="advanced-portfolio-page-section">
          <div className="advanced-portfolio-page-sidebyside">
            <div className=".advanced-portfolio-page-leftside">
              <h2 className="advanced-portfolio-page-sub-title">Persona</h2>
              <p className="advanced-portfolio-page-text">
                Persona mapping based on important concepts for the app, such as
                relationship characteristics, hobbies, organization methods and
                more
              </p>
            </div>
            <div className=".advanced-portfolio-page-rightside">
              <div className="single-image-container">
                <img src={Persona} alt="Persona" />
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
                Full Prototype
              </h2>
              <p className="advanced-portfolio-page-text">
                By clicking on the mockups or the button below, you&#39;ll be
                able to navigate within the prototype
              </p>

              <div className="advanced-portfolio-page-leftside">
                <a
                  href="https://www.figma.com/proto/Wr0NrWDusefqsdOLixuztN/Couplement-%7C-Awari?type=design&node-id=579-5178&t=afRSmaHAL31zaJaQ-1&scaling=scale-down&page-id=360%3A4372&starting-point-node-id=579%3A5178&mode=design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttons">Prototype</button>
                </a>
              </div>
            </div>
            <div className=".advanced-portfolio-page-rightside">
              <div className="single-image-container">
                <img src={FullPrototype} alt="Full Prototype" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="advanced-portfolio-page-section-gray">
        <div className="advanced-portfolio-page-section">
          <h2 className="advanced-portfolio-page-title">Thank you!</h2>
          <p className="advanced-portfolio-page-text">
            Hope you liked the project!
          </p>
          <div className="single-image-container">
            <img src={Thanks} alt="Thanks" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Couplement;
