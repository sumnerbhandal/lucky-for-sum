import React, { useState, lazy, useEffect, Suspense } from "react";
import { Link } from "react-router-dom/index";
import { Footer } from "../footer/footer";
import { Helmet } from "react-helmet";
import "./about.css";

const footerStyle = {
    height: "auto"
}


const AboutPage = (props) => {
       
    return (
        <div id="about">
            <div className="section">
                <Helmet>
                    <title>Lucky For Sum | About Me | Sumner Bhandal</title>
                    <meta name="description" content="The digital portfolio of Sumner Bhandal. Senior User Interface Designer with a fondness for front-end development and inclusive design." />  
                    <meta name="keywords" content="portfolio,UX,user experience,UI,user interface,product design, designer, digital design,online,digital, support, community, injury, snippets, acl, support community, acl injury, design snippets"/>
                </Helmet>
                <div className="about-hero">
                    <h1>About Me</h1>
                    <p>Previously working to keep students safe online and offline at Education Technology company <a href="/project/online-safety-pid-3">Impero Software</a>. More recently helping to scale a leading e-commerce retailer and build better processes at <a href="/project/total-platform-pid-1">Next</a>.</p>
            <p tabIndex="0">My current challenge is leading, coaching and managing the Design and Research team at <a href="/project/robin-ai-pid-0">Robin AI</a>.</p>
                </div>
            </div>

            <div style={footerStyle} className="hp-section">
                <Footer />
            </div>
        </div>
    );
}

  export default AboutPage;