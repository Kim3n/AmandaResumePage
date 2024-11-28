import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Profile from "./Components/Profile.jsx";
import ResumeList from "./Components/Resume.jsx";
import "./App.css";
import PortfolioList from "./Components/Portfolio.jsx";
import SimplePortfolioPage from "./Components/PortfolioPages/SimplePortfolioPage.jsx";
import ChatBubble from "./Components/ChatBubble.jsx";
import Planfy from "./Components/PortfolioPages/Planfy.jsx";
import Couplement from "./Components/PortfolioPages/Couplement.jsx";
import ThisPortfolio from "./Components/PortfolioPages/ThisPortfolio.jsx";
import { TitleUpdater } from "./Components/TitleUpdater.jsx";
import NotFound from "./Components/NotFound.jsx";

function App() {
  function Home() {
    return (
      <div className="fade-in">
        <Profile showIntro={true} />;
      </div>
    );
  }

  function Portfolio() {
    return (
      <div className="fade-in">
        <Profile showIntro={false} />;
        <PortfolioList />;
      </div>
    );
  }

  function Resume() {
    return (
      <div className="fade-in">
        <Profile showIntro={false} />;
        <ResumeList />;
      </div>
    );
  }

  return (
    <Router>
      <div className="main">
        <NavBar />
        <ChatBubble />
        <TitleUpdater />
        <Routes location={location}>
          <Route path="/portfolio/:title" element={<SimplePortfolioPage />} />
          <Route path="/portfolio/planfy" element={<Planfy />} />
          <Route path="/portfolio/couplement" element={<Couplement />} />
          <Route path="/portfolio/this-portfolio" element={<ThisPortfolio />} />
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
