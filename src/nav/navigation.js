import { Link } from "react-router-dom/index";
import React, { useState } from "react";
import {ThemeToggle} from "./components/dark-light-toggle";
import "./navigation.css";

const NavDefault = () => {
    const [isShown, setIsShown] = useState(false);

    function scrollSectionIntoView(e) {
        console.log(e.target.id);
        const id = e.target.id;
        const scrollId = id.replace("link_", "");
        const elmnt = document.getElementById(scrollId);
        elmnt.scrollIntoView();
    }
    return (
        <nav role="navigation">
            <div className={`masthead ${!isShown ? "" : "hovered"}`}>
                <div className="section">
                    <ThemeToggle />
                    <Link
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    id="link_homepage"
                    onClick={scrollSectionIntoView}
                    className="logo-image"
                    to="/">
                        <img src={require('./icons/lucky-for-sum-logo.svg')} alt="Home"/>
                    </Link>
                    <ul className="header-side-container">
                        {/* <li>
                            <Link to='/#project-container' id="link_project-container" onClick={scrollSectionIntoView}>Projects</Link>
                        </li>
                        <li>
                        <Link to='/#design-snippets' id="link_design-snippets" onClick={scrollSectionIntoView}>Design Snippets</Link>
                        </li> */}
                        <li>
                            <Link to="#">Site Under Construction</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default NavDefault;

