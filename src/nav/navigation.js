import { Link } from "react-router-dom/index";
import React from "react";
import "./navigation.css"


const NavDefault = () => {
    return (
        <nav>
        <div className="masthead">
        <Link to="/">Lucky For Sum</Link>
        </div>

            <ul className="lower-navigation section">
                <li><Link to="/">Home</Link></li>
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

