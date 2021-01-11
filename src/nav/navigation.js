import { Link } from "react-router-dom/index";
import React, { useState } from "react";
import "./navigation.css"

const NavDefault = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <nav role="navigation">
        <div className={`masthead ${!isShown ? "" : "hovered"}`}>
            <Link
            // className={isScrolled}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} 
            to="/">
                <img src={require('./icons/lucky-for-sum-logo.svg')} alt="Home"/>
            </Link>
            {/* <p className="site-name">Lucky For Sum</p> */}
        </div>
        </nav>
    )
}


export default NavDefault;

