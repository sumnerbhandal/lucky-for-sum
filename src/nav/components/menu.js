import React from "react";
import { Link } from "react-router-dom/index";



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
        </div>
    )
}
