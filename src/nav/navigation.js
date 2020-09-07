import { Link } from "react-router-dom/index";
import React, { useState } from "react";
import "./navigation.css"

const NavDefault = () => {
    const [isShown, setIsShown] = useState(false);
    // const [bodyOffset, setBodyOffset] = useState(
    //     document.body.getBoundingClientRect()
    // );
    // const [scrollY, setScrollY] = useState(Math.round(bodyOffset.top));
    // const [isScrolled, setIsScrolled] = useState(null);

    // const listener = e => {
    //     setBodyOffset(document.body.getBoundingClientRect());
    //     setScrollY(-Math.round(bodyOffset.top));
    //     if (scrollY < 40) {
    //         setIsScrolled("up");
    //     } else {
    //         setIsScrolled("down");
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", listener);
    //     return () => {
    //     window.removeEventListener("scroll", listener);
    //     };
    // });

    return (
        <nav>
        <div className={`masthead ${!isShown ? "" : "hovered"}`}>
            <Link
            // className={isScrolled}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} 
            to="/">
                <img src={require('./icons/lucky-for-sum-logo.svg')} alt="Close"/>
            </Link>
            {/* <p className="site-name">Lucky For Sum</p> */}
        </div>
            <ul className="lower-navigation section">
                <li><Link to="/">New In</Link></li>
                <li><Link to="/services">Hand Crafted Illustrations</Link></li>
                <li><Link to="/">Nav Link 3</Link></li>
                <li><Link to="/">Nav Link 4</Link></li>
                <li><Link to="/">Nav Link 5</Link></li>
                <li><Link to="/">Nav Link 6</Link></li>
                <li><Link to="/">Nav Link 7</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}


export default NavDefault;

