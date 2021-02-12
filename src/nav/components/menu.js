import React from "react";
import { Link } from "react-router-dom/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCodepen, faTwitter, faLinkedin, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';

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

export const Menu = (props) => {

    return (
        <div ref={props.wrapperRef} className={`main-menu ${props.isToggled ? "open" : ""}`}>
            <ul className="">
              <li>
                  <Link to='/#introSection' id="link_introSection" onClick={props.scrollSectionIntoView} tabIndex={props.isToggled ? "0" : "-1"}>Home</Link>
              </li>
              <li>
                  <Link to='/#project-container' id="link_project-container" onClick={props.scrollSectionIntoView} tabIndex={props.isToggled ? "0" : "-1"}>Projects</Link>
              </li>
              <li>
                <Link to='/#design-snippets' id="link_design-snippets" onClick={props.scrollSectionIntoView} tabIndex={props.isToggled ? "0" : "-1"}>Design Snippets</Link>
              </li>
            </ul>
            
            <ul className="social" aria-label="Social Links">
                <li className="label"><p>Find me on social networks at:</p></li>
                {socialLinks.map((social, index) => (
                    <li key={index}>
                        <a href={social.link} target="_blank" tabIndex={props.isToggled ? "0" : "-1"} aria-label={social.description} rel="noopener noreferrer">
                            <FontAwesomeIcon icon={social.image} />
                         </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
