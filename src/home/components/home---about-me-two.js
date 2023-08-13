import React, {lazy, Suspense} from "react";
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom/index";
const ProgressiveImageHook = lazy(() => import('../../reusable-functions/progressive-image-load'));

const imageSrc = "about-768.jpg";

export const About = () => {
    return (
        <div className="aboutMe loadup">
            <h1 aria-level="1" tabIndex="0">Hi, I'm Sumner</h1>
            <p tabIndex="0">I work with start-ups, scale-ups, and enterprise organisations to understand their customers, develop product strategies, and design digital products.</p>
            {/* <p>Previously working to keep students safe online and offline at Education Technology company <a href="/project/online-safety-pid-3">Impero Software</a>. More recently helping to scale a leading e-commerce retailer and build better processes at <a href="/project/total-platform-pid-1">Next</a>.</p>
            <p tabIndex="0">My current challenge is leading, coaching and managing the Design and Research team at <a href="/project/robin-ai-pid-0">Robin AI</a>.</p> */}
        </div>
    )
}