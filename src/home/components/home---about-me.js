import React, {lazy, Suspense} from "react";
import LazyLoad from 'react-lazy-load';
const ProgressiveImageHook = lazy(() => import('../../reusable-functions/progressive-image-load'));

const imageSrc = "about-768.jpg";

export const About = () => {
    return (
        <div className="aboutMe">
            <div className="column">
                <h3 aria-level="1" tabIndex="0">This is where I say a lot of nice things about myself and put an inspirational quote about design</h3>
                <p className="intro" tabIndex="0">"Good design is obvious, great design is transparent" - Joe Sparan</p>
                <p tabIndex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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