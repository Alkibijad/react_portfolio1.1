import React from 'react'
import { useState, useEffect } from 'react'
import projectLinks from "./projectLinks"

function Projects() {

  const [links, setLinks] = useState();

  useEffect(() => { 
    console.log(links);
    setLinks(projectLinks)
  })






  const createProjectCard = () => { 
    return <>{links.map((item) => { 
      return <div key={ item.id} className='card_container'>
        <button><a href={item.project}>Visit Nike</a></button>
        <p className='card_text'>{item.about }</p>
        </div>
    })}</>
  }













  return (
    <div> {links ?  createProjectCard() : null}</div>
  )
}

export default Projects
