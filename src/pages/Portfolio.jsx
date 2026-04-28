import "./Portfolio.css";
import { useState } from "react";
import Project from "../components/Project.jsx";

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="portfolio">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="toggle-visiblity-btn"
      >
        {isVisible ? "Hide Projects" : "Show Projects"}
      </button>
      <main className={isVisible ? "project-list" : "hidden"}>
        <h1>My Projects</h1>
        <Project />
      </main>
    </div>
  );
}
export default Portfolio;
