import React, { useState, useRef, useEffect } from "react";
import { ThemeToggle } from "./components/dark-light-toggle";
import { Menu } from './components/menu';
import { Link } from "react-router-dom/index";
import "./navigation.css";


const NavDefault = () => {
    const [isShown, setIsShown] = useState(false);

    const [isToggled, setToggled] = useState(false);

    function scrollSectionIntoView(e) {
        console.log(e.target.id);
        const id = e.target.id;
        const scrollId = id.replace("link_", "");
        const elmnt = document.getElementById(scrollId);
        elmnt.scrollIntoView();
        setToggled(false);
    }

    function toggleTrueFalse(e) {
        setToggled(!isToggled);
    }

    function useOutsideAlerter(ref, e) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                console.log(event.target)
                if (ref.current && !ref.current.contains(event.target) && event.target.id !== 'burger-button') {
                    // alert("You clicked outside of me!");
                    setToggled(false);
                    console.log(isToggled);
                }
            }

            // && e.target.id !== 'burger-button'
      
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
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
                    <div className="header-side-container right">
                        <button id="burger-button" className={isToggled ? "open" : ""} onClick={toggleTrueFalse}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <p>{isToggled ? "Close" : "Open"}</p><p className="tabletUpwards">Menu</p>
                        </button>
                    </div>
                    <Menu isToggled={isToggled} scrollSectionIntoView={scrollSectionIntoView} wrapperRef={wrapperRef} />
                </div>
            </div>
        </nav>
    )
}


export default NavDefault;

