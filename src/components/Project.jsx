import { useState } from "react";
import Popup from "./Popup";
import "./Project.css";
import travelImg from "../assets/travel.png";
import bankAccountImg from "../assets/bank-account.png";
import verdeInkImg from "../assets/verde-ink.png";
import typingGameImg from "../assets/typing-game.png";

function Project() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const handlePopup = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  let projects = [
    {
      title: "Typing Game",
      tech: ["HTML,", "CSS,", "JS"],
      summary:
        "An interactive typing game with multiple difficulty levels to challenge and improve your typing speed and accuracy.",
      learned:
        "How to connect different features together into a smooth user experience.",
      challenges: "Getting the different difficulty levels.",
      image: typingGameImg,
      repo: "https://github.com/ls-95/typing-game-starter-master",
    },
    {
      title: "Bank Account App",
      tech: ["HTML,", "CSS,", "JS"],
      summary:
        "A simple banking app that allows users to deposit and withdraw money from their account.",
      learned:
        "How to use switch cases and functions to handle different user actions.",
      challenges:
        "Translating the logic from JavaScript into visible changes on the page using the DOM.",
      image: bankAccountImg,
      repo: "https://github.com/ls-95/javascript-assignments/tree/master/src/lesson-five",
    },
    {
      title: "Verde Ink",
      tech: ["HTML,", "CSS,", "JS"],
      summary:
        "A website for an eco-friendly ink brand, focused on clean design and sustainability.",
      learned:
        "How to work as part of a team and split work across a shared project.",
      role: "Set up the repository and built the contact page.",
      challenges:
        "Learning to communicate with teammates and keep everything organised.",
      image: verdeInkImg,
      repo: "https://github.com/ls-95/verde-ink",
    },
    {
      title: "Travel Website",
      tech: ["HTML,", "SASS,", "JS"],
      summary:
        "A website for a travel company where users can explore destinations.",
      learned:
        "How to use SASS across a larger project including variables and reusable styles.",
      challenges:
        "Applying SASS across the whole project while working within a deadline.",
      image: travelImg,
      repo: "https://github.com/ls-95/assignment-test-skills",
    },
  ];

  return (
    <>
      <input
        className="search-bar"
        type="text"
        value={search}
        placeholder="Search project..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {projects
        .filter(
          (project) =>
            project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.tech.some((technology) =>
              technology.toLowerCase().includes(search.toLowerCase()),
            ),
        )
        .map((item, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h2>{item.title}</h2>
              <button onClick={() => handlePopup(index)}>
                {openIndex === index ? "See Less" : "See More"}
              </button>
            </div>
            <hr />
            <p>{item.summary}</p>
            <hr />
            <div>
              {openIndex === index && (
                <Popup
                  tech={item.tech}
                  learned={item.learned}
                  challenges={item.challenges}
                  role={item.role}
                  image={item.image}
                  title={item.title}
                  repo={item.repo}
                />
              )}
            </div>
          </div>
        ))}
    </>
  );
}

export default Project;
