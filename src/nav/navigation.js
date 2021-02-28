import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom/index";
import "./navigation.css";

const Menu = lazy(() => import('./components/menu'));

const NavDefault = () => {
    const [isShown, setIsShown] = useState(false);

    const [isToggled, setToggled] = useState(false);

    function scrollSectionIntoView(e) {
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
                        <Link
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        id="link_homepage"
                        onClick={scrollSectionIntoView}
                        className="logo-image"
                        to="/">
                            <img src={require('./icons/lucky-for-sum-logo.svg')} alt="Home"/>
                        </Link>
                        <Link className="brand-name" to="/">
                            <img src={require('./icons/lfs-logo-dark.svg')} alt="Home"/>
                        </Link>
                    </div>
                    <Suspense fallback={<div className="header-side-container right"></div>}>
                        <div className="header-side-container right">
                            <a className="get-in-touch" target="new" href="mailto:sumnerbhandal@gmail.com">Get In Touch &nbsp; <span role="img" aria-label="Welcome Wave"> 👋🏽</span></a>
                            <button id="burger-button" className={isToggled ? "open" : ""} onClick={toggleTrueFalse}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <p>{isToggled ? "Close" : "Open"} Menu</p>
                            </button>
                        </div>
                        <Menu isToggled={isToggled} scrollSectionIntoView={scrollSectionIntoView} wrapperRef={wrapperRef} />
                    </Suspense>
                </div>
            </div>
        </nav>
    )
}


export default NavDefault;

