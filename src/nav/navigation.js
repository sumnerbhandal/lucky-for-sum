import { Link } from "react-router-dom/index";
import React, { useState, useEffect } from "react";
import "./navigation.css"

const NavDefault = () => {
    const [isShown, setIsShown] = useState(false);
    const [bodyOffset, setBodyOffset] = useState(
        document.body.getBoundingClientRect()
    );
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    const [isScrolled, setIsScrolled] = useState(null);

    const listener = e => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        if (scrollY < 40) {
            setIsScrolled("up");
        } else {
            setIsScrolled("down");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
        window.removeEventListener("scroll", listener);
        };
    });

    return (
        <nav>
        <div className={`masthead ${!isShown ? "" : "hovered"}`}>
            <Link
            className={isScrolled}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} 
            to="/">
                <img src="https://cdn.luckyforsum.com/uploads/lucky_for_sum_96a1ff70a9.svg" alt="Lucky For Sum Logo"/>
            </Link>
            {/* <p className="site-name">Lucky For Sum</p> */}
        </div>
            <ul className="lower-navigation section">
                <li><Link to="/">Nav Link 1</Link></li>
                <li><Link to="/">Nav Link 2</Link></li>
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

