

import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="form-container">
      <div className="form" id="forma">
        <form
          action="https://formsubmit.co/4b08ce2fda732a8f337f7c1a9e9a3bb7"
          method="POST"
        >
          <input
            id="contact-input"
            type="text"
            name="name"
            placeholder="First Name"
            require="true"
          />
          <input
            id="contact-input"
            type="text"
            name="last-name"
            placeholder="Last Name"
            require="true"

          />
          <input
            id="contact-input"
            type="email"
            name="email"
            placeholder="Your E-Mail"
            require="true"

          />
          <textarea
            id="contact-input"
            name="text"
            placeholder="text..."
            cols="20"
            rows="5"
          ></textarea>
          <button id="btn-contact" type="submit">
            Send
          </button>
        </form>
      </div>

      <div id="social-media-icons">
        <a
          href="https://github.com/Alkibijad?tab=repositories/"
          target="blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/aleksandar-sasha/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.airbnb.com/users/show/62938020"
          target="blank"
          rel="noreferrer"
        >
          <i className="fab fa-airbnb"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=1504442479"
          target="blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/mr_aleksandar__/"
          target="blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
