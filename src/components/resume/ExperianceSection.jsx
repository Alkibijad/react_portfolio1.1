import React from 'react'
import ApiData from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";

function ExperianceSection() {

    const [experienceData, setExpirienceData] = useState();

    const getData = () => {
      ApiData.getEpirenceData().then((res) => {
        setExpirienceData(res.data);
      });
    };
  
    useEffect(() => {
      getData();
    }, []);



    const expiriance = () => {
        return experienceData.map((el, index) => {
          return (
            <div key={index} className="each-job-details">
              <div className="employer-position-time">
                <p>
                  {" "}
                  {el.employer} – {el.location}
                </p>
                <p> {el.position}</p>
                <p>{el.period}</p>
              </div>
              <p className="resume-text">{el.about}</p>
              <div className="contributions-container">
                <h2>Selected Contributions:</h2>
    
                <ul>
                  {el.selectedContributions.map((item, index) => (
                    <li key={index}>{item.contribution}</li>
                  ))}
                </ul>
              </div>
              <div className="duties-container">
                <h4>Duties:</h4>
                <ul>
                  {el.duties.map((item, index) => (
                    <li key={index}>{item.duty}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        });
      };






  return (
    <div className="expiriance">
    <h2>experience</h2>
    {experienceData ? expiriance() : null}
  </div>
  )
}

export default ExperianceSection