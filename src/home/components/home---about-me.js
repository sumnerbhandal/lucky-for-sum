import React from "react";

export const About = () => {
    return (
        <div className="aboutMe">
            <div className="column">
                <h3 aria-level="1" tabIndex="0">This is where I say a lot of nice things about myself and put an inspirational quote about design</h3>
                <p className="intro" tabIndex="0">"Good design is obvious, great design is transparent" - Joe Sparan</p>
                <p tabIndex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="column">
                <img src={require('../images/about-320.jpg')}  srcSet={`${require('../images/about-320.jpg')}  320w, ${require('../images/about-768.jpg')}  768w, ${require('../images/about-1024.jpg')} 1024w, ${require('../images/about-1280.jpg')} 1280w`} alt="Sumner giving a presentation" />
            </div>
        </div>
    )
}