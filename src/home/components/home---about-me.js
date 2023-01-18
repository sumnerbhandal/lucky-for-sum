import React, {lazy, Suspense} from "react";
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom/index";
const ProgressiveImageHook = lazy(() => import('../../reusable-functions/progressive-image-load'));

const imageSrc = "about-768.jpg";

export const About = () => {
    return (
        <div className="aboutMe">
            <div className="column">
                <h1 aria-level="1" tabIndex="0">Hi, my name's Sumner <span role="img" aria-label="Welcome Wave">👋🏽</span></h1>
                <p tabIndex="0">I'm a product specialist who designs experiences, interactions and implementation strategies that look to solve the everyday problems that we have learned to work around.</p>
                <p>Previously working to keep students safe online and offline at Education Technology company <a href="/project/online-safety-pid-3">Impero Software</a>. More recently helping to scale a leading e-commerce retailer and build better processes at <a href="/project/total-platform-pid-1">Next</a>.</p>
                <p tabIndex="0">My current challenge is to help make contracts simpler for all at <a href="/project/robin-ai-pid-0">Robin AI</a>.</p>
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