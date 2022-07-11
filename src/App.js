import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Resume from "./components/resume/Resume";
import CoverLetter from "./components/coverLetter/CoverLetter.jsx";
import References from "./components/references/References";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
     

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
         <Route path="/CoverLetter" element={<CoverLetter />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/References" element={<References />} />
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;
