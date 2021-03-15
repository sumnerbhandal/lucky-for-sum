import React from "react";
import { Link } from "react-router-dom/index";

export const Bio = () => {
    return (
        <div className="aboutIntro">
            <h1 aria-level="1" tabIndex="0">Hi, my name's Sumner <span role="img" aria-label="Welcome Wave">👋🏽</span></h1>
            <p className="intro" tabIndex="0">I'm a Senior User Interface Designer at one of the leading British retailers <a href="https://www.next.co.uk/" rel="noopener noreferrer" target="_blank">Next</a>. I design experiences, interactions and implementation strategies that look to take the brilliant quantitative and qualitative research done by the business and see them through to fruition. </p>
            <p className="intro" tabIndex="0">Having plied my trade as a graphic designer, I have had the opportunity to expand my repertoire to adopt human-centred reasearch methods through studying Human Computer Interaction, and marry that with a working knowledge of <Link to="/project/portfolio-for-all-pid-0">inclusive design</Link> to design and launch projects like this.</p>
            <p className="intro" tabIndex="0">My current challenge is utilising all of that knowledge and leveraging my understanding of front-end development to help shape the future of the Next Platform Services and create a responsive, inclusive and versatile interface that will provide the foundation of the website for years to come.</p>
        </div>
    )
}