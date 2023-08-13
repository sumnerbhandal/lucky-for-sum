import React, { useState, useRef, useEffect } from "react";
import Menu from "./components/menu";
import "./navigation.css";
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";



const NavDefault = (props) => {
    const [isShown, setIsShown] = useState(false);
    const [isToggled, setToggled] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function toggleTrueFalse(e) {
        setToggled(!isToggled);
    }
    function useOutsideAlerter(ref, e) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && event.target.id !== 'burger-button') {
                    setToggled(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
      }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <nav role="navigation">
            <div className={`masthead ${!isShown ? "" : "hovered"}`}>
                <div className="section">
                    <div className="header-side-container" >
                        <NavHashLink
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        id="link_homepage"
                        // onClick={scrollSectionIntoView}
                        className="logo-image"
                        to="/#homepage">
                            <img src={require('./icons/lucky-for-sum-logo.svg')} alt="Home"/>
                        </NavHashLink>
                        <NavHashLink className="brand-name" to="/#introSection">
                            <img src={require('./icons/lfs-logo-dark.svg')} alt="Home"/>
                        </NavHashLink>
                    </div>
                        <div className="header-side-container right">
                            <NavLink end to='/'
                                className="desktop-links"
                            >
                                Home
                            </NavLink>
                            <NavLink to='/blog'
                                className="desktop-links"
                            >
                                Blog
                            </NavLink>

                            <a className="get-in-touch-header" target="new" href="mailto:sumnerbhandal@gmail.com">Get In Touch &nbsp; <span role="img" aria-label="Welcome Wave"> 👋🏽</span></a>
                            <button id="burger-button" className={isToggled ? "open" : ""} onClick={toggleTrueFalse}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <p>{isToggled ? "Close" : "Open"} Menu</p>
                            </button>
                        </div>
                        <Menu isToggled={isToggled} toggleTrueFalse={toggleTrueFalse} wrapperRef={wrapperRef} />
                </div>
            </div>
        </nav>
    )
}


export default NavDefault;

