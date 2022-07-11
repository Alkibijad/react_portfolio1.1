import React from "react";
import "./resume.css";

import ExperianceSection from "./ExperianceSection";

function Resume() {
  return (
    <div className="resume-container">
      <h1 id="developers-name">Aleksandar "Sasha" Jovanovic</h1>

      <div className="download_resume">
        <a
          href="../../files/Aleksandar Jovanovic Resume.pdf"
          download="Aleksandar Jovanovic - Resume"
        >
          <button className="btnDownload-file">Download PDF Resume</button>
        </a>
      </div>

      <div className="qualifications">
        <h2>Key Qualifications</h2>

        <ul>
          <li>
            Frontend web developer with a comprehensive understanding of
            programing and design. Experienced with HTML, CSS and JavaScript.
          </li>
          <li>
            Visionary professional with an exceptional education, meaningful
            cultural experience, and a passion for elevating human potential.
          </li>
          <li>
            Collaborative team player with high emotional intelligence and the
            ability to plan, prioritize, manage, and complete undertakings
            within fast-paced, deadline-driven situations.
          </li>
          <li>
            Forward-thinking professional with a remarkable ability to uncover
            root causes and encourage teams to discover previously unrealized
            solutions with a focus on values and culture.
          </li>
          <li>
            Highly analytical thinker with expertise in Customer Service,
            Project / Event Management, Office Management, Personnel
            Supervision, Process Improvement, Stocks & Finance, Nonprofit
            Fundraising, and SEC Legal Procedures.
          </li>
          <li>
            Excellent communicator with the capacity to use creativity to
            determine the best course of action for the business as a whole
            through the use of skills that transfer across multiple industries
            and positions.
          </li>
        </ul>
      </div>

      <div className="expertise">
        <h2>expertise</h2>
        <ul className="list-container">
          <div className="expertise-left">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Ajax</li>
              <li>React</li>
            </ul>
          </div>
          <div className="expertise-right">
            <ul>
              <li>Time management</li>
              <li>Organization, Coordination and Management</li>
              <li>Priority Management</li>
              <li>Human Resource Management</li>
              <li>Quality & Process Improvement</li>
            </ul>
          </div>
        </ul>
      </div>

      <ExperianceSection />

      <div className="education">
        <h2>Educational Background</h2>
        <ul>
          <li>IT Programing School - Danilo Vesovic, 2021 - 2021</li>
          <li>Lambda School: Online Coding and Bootcamp, 2020-2021</li>
          <li>
            Bachelor in Management, John Nesbit University, Belgrade, Serbia
            2008 – 2012
          </li>
          <li>
            Vocational High School for Electrical Engineering, Belgrade, Serbia
            1999 -2002
          </li>
          <li>
            Manuscripts digitalization – National Library of Serbia The
            development of digitization - Practice and Standards
          </li>
          <li>
            Techniques of manuscripts digitalization, National Library of
            Serbia; Development of digitization, Practice, and Standards
          </li>
        </ul>
      </div>

      <div className="training">
        <h2>Training and Technical Skills</h2>
        <p className="container">
          HTML | CSS |JavaScript | Public Speaking | High Profile Customer
          Service | Advanced knowledge of Personnel and Office Management |
          Significant experience in Event Coordination|
        </p>
      </div>
    </div>
  );
}

export default Resume;
