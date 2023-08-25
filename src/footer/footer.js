import React from "react";
import {  faCodepen, faTwitter, faLinkedin, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../nav/components/menu.css";



const socialLinks = [
  {
      "image": faTwitter,
      "link": "https://twitter.com/sumnerbhandal",
      "description": "Twitter Profile"
  },
  {
      "image": faLinkedin,
      "link": "https://uk.linkedin.com/in/sumnerbhandal",
      "description": "Linkedin Profile"
  },
  {
      "image": faDribbble,
      "link": "https://dribbble.com/sumnerbhandal",
      "description": "Dribbble Page"
  },
  {
      "image": faCodepen,
      "link": "https://codepen.io/sumnerbhandal",
      "description": "Codepen"
  },
  {
      "image": faGithub,
      "link": "https://github.com/sumnerbhandal",
      "description": "Github Profile"
  }
]

export const Footer = (props) => {
    const date = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="section">
        <div>© {date} Lucky For Sum</div>
        <ul className="social" aria-label="Social Links">
                {socialLinks.map((social, index) => (
                    <li key={index}>
                        <a href={social.link} target="_blank" tabIndex={props.isToggled ? "0" : "-1"} aria-label={social.description} rel="noopener noreferrer">
                            <FontAwesomeIcon icon={social.image} />
                         </a>
                    </li>
                ))}
            </ul>


        </div>

      </footer>
    )
}