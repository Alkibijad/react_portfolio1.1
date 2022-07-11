import React from "react";
import { useState, useEffect } from "react";
import projectLinks from "./projectLinks";

function Projects() {
  const [links, setLinks] = useState();

  useEffect(() => {
    setLinks(projectLinks);
  }, [links]);

  const createProjectCard = () => {
    return (
      <div className="card">
        {links.map((item) => {
          return (
            <div key={item.id} className="card_container">
              <div className="img_container">
                <img src={item.backgroundImage} alt="" />
              </div>
              <button>
                <a href={item.project}>{item.siteName}</a>
              </button>
              <p className="card_text">{item.about}</p>
            </div>
          );
        })}
        <p>page under construction</p>
      </div>
    );
  };

  return <div> {links ? createProjectCard() : null}</div>;
}

export default Projects;
