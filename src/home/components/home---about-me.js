import React, {lazy, Suspense} from "react";
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom/index";
const ProgressiveImageHook = lazy(() => import('../../reusable-functions/progressive-image-load'));

const imageSrc = "about-768.jpg";

export const About = () => {
    return (
        <div className="aboutMe">
            <div className="column">
                <h1 aria-level="1" tabIndex="0">Hi, my name's Sumner Bhandal <span role="img" aria-label="Welcome Wave">👋🏽</span></h1>
                <p tabIndex="0">I'm a product specialist who designs experiences, interactions and implementation strategies that look to solve the everyday problems that we have learned to work around.</p>
                <p tabIndex="0">Having started my career in visual communication, I have had the opportunity to expand my repertoire to adopt human-centred research methods through studying Human Computer Interaction and working alongside some brilliant user researchers. I continue to use that as a basis to inform my working knowledge of <Link to="/project/portfolio-for-all-pid-1">inclusive design</Link> to try and make the digital age a bit more accessible.</p>
                <p tabIndex="0">My current challenge is to help make contracts simpler for all at <a href="https://www.robinai.co.uk/" rel="noopener noreferrer" target="_blank">Robin AI</a>.</p>
                </div>
            <div className="column">
                 <LazyLoad offset={400} throttle={50}>
                    <Suspense fallback={<div></div>}>
                        <ProgressiveImageHook
                            src={require('../images/about-768.jpg')}
                            placeholder={require('../images/' + imageSrc.replace(".png" || ".gif" || ".jpg", "_placeholder.png"))}
                            alt="Sumner giving a presentation"
                            tabIndex={0}
                        />
                    </Suspense>
                </LazyLoad>
            </div>
        </div>
    )
}