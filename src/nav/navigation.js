import { Link } from "react-router-dom/index";
import React, { useState } from "react";
import "./navigation.css"

const NavDefault = () => {
    const [isShown, setIsShown] = useState(false);
    function backToTop() {
        window.scrollTo(0, 0)
    }
    return (
        <nav role="navigation">
        <div className={`masthead ${!isShown ? "" : "hovered"}`}>
            <Link
            // className={isScrolled}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={backToTop} 
            to="/">
                <img src={require('./icons/lucky-for-sum-logo.svg')} alt="Home"/>
            </Link>
            {/* <p className="site-name">Lucky For Sum</p> */}
        </div>
        </nav>
    )
}


export default NavDefault;

