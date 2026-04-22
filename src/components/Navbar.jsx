import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
        <ul className={isOpen ? "open" : ""}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
