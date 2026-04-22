import "./Portfolio.css";
import Project from "../components/Project.jsx";
import travelImg from "../assets/travel.png";
import bankAccountImg from "../assets/bank-account.png";
import verdeInkImg from "../assets/verde-ink.png";
import typingGameImg from "../assets/typing-game.png";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <main className="project-list">
        <Project
          title="Typing Game"
          tech="HTML, CSS, JS"
          summary="An interactive typing game with multiple difficulty levels to challenge and improve your typing speed and accuracy."
          learned="How to connect different features together into a smooth user experience."
          challenges="Getting the different difficulty levels."
          image={typingGameImg}
          repo="https://github.com/ls-95/typing-game-starter-master"
        />
        <Project
          title="Bank Account App"
          tech="HTML, CSS, JS"
          summary="A simple banking app that allows users to deposit and withdraw money from their account."
          learned="How to use switch cases and functions to handle different user actions."
          challenges="Translating the logic from JavaScript into visible changes on the page using the DOM."
          image={bankAccountImg}
          repo="https://github.com/ls-95/javascript-assignments/tree/master/src/lesson-five"
        />
        <Project
          title="Verde Ink"
          tech="HTML, CSS, JS"
          summary="A website for an eco-friendly ink brand, focused on clean design and sustainability."
          learned="How to work as part of a team and split work across a shared project."
          role="Set up the repository and built the contact page."
          challenges="Learning to communicate with teammates and keep everything organised."
          image={verdeInkImg}
          repo="https://github.com/ls-95/verde-ink"
        />
        <Project
          title="Travel Website"
          tech="HTML, SASS, JS"
          summary="A website for a travel company where users can explore destinations."
          learned="How to use SASS across a larger project including variables and reusable styles."
          challenges="Applying SASS across the whole project while working within a deadline."
          image={travelImg}
          repo="https://github.com/ls-95/assignment-test-skills"
        />
      </main>
    </div>
  );
}
export default Portfolio;
