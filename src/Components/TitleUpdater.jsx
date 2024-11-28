import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/": "About | Amanda Azevedo",
      "/portfolio": "Portfolio | Amanda Azevedo",
      "/resume": "Resume | Amanda Azevedo",
    };

    let title;

    if (location.pathname.startsWith("/portfolio/")) {
      const projectTitle = location.pathname.replace("/portfolio/", "");
      title = `${formatTitle(projectTitle)} | Amanda Azevedo`;
    } else {
      title = routeTitles[location.pathname] || "Amanda Azevedo";
    }

    document.title = title;
  }, [location.pathname]);

  return null;
}

// Helper function to format project titles
function formatTitle(string) {
  return string
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
}

export { TitleUpdater };
