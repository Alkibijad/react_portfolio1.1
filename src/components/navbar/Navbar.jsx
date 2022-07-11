import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar_container">
      <ul className="navbar_list">
        <li className="developer_signature">
          <Link to="/Home" id="dev_signature">
            Sasha
          </Link>
        </li>
        <li className="navbar_item">
          <Link to="/Resume">Resume</Link>
        </li>
        <li className="navbar_item">
          <Link to="/CoverLetter">Cover Letter</Link>
        </li>
        <li className="navbar_item">
          <Link to="/References">References</Link>
        </li>
        <li className="navbar_item">
          <Link to="/Projects">Projects</Link>
        </li>
        <li className="navbar_item">
          <Link to="/Contact">Contacts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
