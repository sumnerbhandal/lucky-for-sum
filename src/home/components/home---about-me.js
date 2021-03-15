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
                <p tabIndex="0">I'm a Senior User Interface Designer at one of the leading British retailers <a href="https://www.next.co.uk/" rel="noopener noreferrer" target="_blank">Next</a>. I design experiences, interactions and implementation strategies that look to take the brilliant quantitative and qualitative research done by the business and see them through to fruition. </p>
                <p tabIndex="0">Having plied my trade as a graphic designer, I have had the opportunity to expand my repertoire to adopt human-centred research methods, through studying Human Computer Interaction, and marry that with a working knowledge of <Link to="/project/portfolio-for-all-pid-0">inclusive design</Link> to try and make the internet a bit more accessible.</p>
                <p tabIndex="0">My current challenge is utilising all of that knowledge and leveraging my understanding of front-end development to help shape the future of the Next Platform Services and create a responsive, inclusive and versatile interface that will provide the foundation of the website for years to come.</p>
                <p tabIndex="0">Website is still under construction so excuse the lack of content/poor grammar and spelling in areas while I continue with this public draft.</p>
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