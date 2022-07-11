import React, { useState } from "react";
import "./references.css";
import imgRef from "./reference";



function References() {
  const [show, setShow] = useState(false)
  const [currentImg, setCurrentImg] = useState("")


  const displayLarge = (image) => { 
    setCurrentImg(image)
    setShow(true)

  }

  const closeModal = () => { 
    setShow(false)
    setCurrentImg("")
  }
  

  const gallaryLayout = () => {
    return imgRef.map((el) => {
      return (
        <div key={el.id} >
          <img src={el.imageSmall} onClick={() =>{ displayLarge(el.imageLarge)} } alt="" />
        </div>
      );
    });
  };

  return <div className="gallery-container">
    {show && <div className="modal">
      <p onClick={ closeModal}>X</p>
      <img src={currentImg} alt="" />
    </div>}
    {gallaryLayout()}
  </div>;
}

export default References;
