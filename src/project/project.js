import React, { useEffect, useState, lazy, Suspense } from "react";
import './project.css';
import hpPreload from "./components/preload";
import ProjectPageFeed from '../data-feed/project-feed';
import {Helmet} from "react-helmet";
const ProgressiveImageHook = lazy(() => import('../reusable-functions/progressive-image-load'));
const MarketingBannerTwo = lazy(() => import('../banners/marketing-banner'));
const LazyLoad = lazy(() => import('react-lazy-load'));

const Project = (props) => {

    const verticalPosition = props.position == null ? 0 : props.position.y;
    const leftPosition = props.position == null ? 0 : props.position.x;
    const projectIndex = window.location.href.split('pid-')[1] === undefined ? 0 : window.location.href.split('pid-')[1];
    const jSONReferrer = window.location.href.split('pid-')[1] === undefined ? hpPreload : ProjectPageFeed;

    const [projectsShown, setProjectsShown] = useState([jSONReferrer[projectIndex]]);
    const [nextProjectIndex, setNextProjectIndex] = useState(parseInt(projectIndex) + 1); 
    const [loaderAnimationId, setLoaderAnimationId] = useState(0);

    const projectPreviewPosition = {
        top: verticalPosition,
        left: leftPosition,
        position: "absolute",
        transform: "rotate(0deg)"
    }

    const [scrollY, setScrollY] = useState(0);

    function logit() {
        const ProjectPage = document.getElementById("project-page");
        setScrollY(window.pageYOffset);
        if ((window.innerHeight + scrollY ) >= ProjectPage.offsetHeight) {
            let loaderBlob = document.getElementById('load-next-item' + loaderAnimationId);
            const nextToBeLoaded = nextProjectIndex + 1;
            setNextProjectIndex(nextToBeLoaded);
            if (nextProjectIndex < ProjectPageFeed.length) {
                loaderBlob.classList.add("loading");
                projectsShown.push(ProjectPageFeed[nextProjectIndex]);
                setLoaderAnimationId(loaderAnimationId + 1)
            } return;
        }
    }
    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    const SEOTitle = projectsShown[0].SEOTitle;
    const SEODescription = projectsShown[0].SEODescription;
    const SEOKeywords = projectsShown[0].keywords

    return (
        <div ref={props.target}>
            <Helmet>
                <title>{SEOTitle}</title>
                <meta name="description" content={SEODescription} />
                <meta name="keywords" content={SEOKeywords} />
            </Helmet>
        {projectsShown.map((pdp, index) => (
            <div key={index} className="project-preview-container header" >
                <div className="project-preview">
                    <div style={projectPreviewPosition} className="project-preview-thumbnail header">
                    {pdp.headerImage}
                    </div>
                    <MarketingBannerTwo message={pdp.title} />
                </div>
                <article id={index + 1} className="project-content section">
                    <section>
                         <div className="col">
                            {pdp.intro.map((paragraph, index) => (
                                <p key={index} className="intro" tabIndex="0">{paragraph}</p>
                            ))}
                        </div>
                    </section>
                    {pdp.background.map((content, index) => (
                        <section key={index}>
                            <div className="heading-container">
                            <h2 aria-level="2" tabIndex="0">
                                {content.h2}
                            </h2>
                            </div>
                            <div className="col">
                                {content.subsection.map((subsection, index) => (
                                    <div key={index} className="">
                                        {subsection.h3 === undefined ? null :
                                        <h3 aria-level="3" tabIndex="0">
                                            {subsection.h3}
                                        </h3>
                                        }
                                        {subsection.copy.map((copy, index) => (
                                            <p key={index} tabIndex="0">{copy}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className="col">
                                {content.responsibilities.map((subsection, index) => (
                                    <div key={index} className="responsibilities">
                                        {subsection.h3 === undefined ? null :
                                        <h3 aria-level="3" tabIndex="0">
                                            {subsection.h3}
                                        </h3>
                                        }
                                        <ul>
                                            {subsection.skills.map((skills, index) => (
                                                <li key={index} tabIndex="0">{skills}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                           
                            {content.featuredImage === undefined ? null :
                                <div className="featured-image-container" tabIndex="0" role="image" aria-label="image" aria-description={content.featuredImage.alt}>
                                     <Suspense fallback={<div></div>}>
                                        <LazyLoad offset={400} throttle={50}>
                                            <ProgressiveImageHook
                                                key={index}
                                                src={require('./images/' + pdp.path + content.featuredImage.image)}
                                                placeholder={require('./images/' + pdp.path + content.featuredImage.image.replace(".png" || ".gif" || ".jpg", "_placeholder.png"))}
                                                alt={content.featuredImage.alt}
                                                tabIndex={-1}
                                            />
                                        </LazyLoad>
                                    </Suspense>
                                </div>
                            }
                        </section>
                    ))}
                    {pdp.article.map((content, index) => (
                        <section key={index}>
                            <div className="heading-container">
                                <h2 aria-level="2" tabIndex="0">
                                    {content.h2}
                                </h2>
                            </div>
                            {content.subsection.map((subsection, index) => (
                                <div key={index} className="subsection">
                                    <div className="col">
                                        <div className="">
                                            {subsection.h3 === undefined ? null :
                                            <h3 aria-level="3" tabIndex="0">
                                                {subsection.h3}
                                            </h3>
                                            }
                                            {subsection.copy === undefined || subsection.copy === ""  ? null :
                                                subsection.copy.map((copy, index) => (
                                                    <p key={index} tabIndex="0">{copy}</p>
                                                ))
                                            }
                                            {subsection.bullet === undefined || subsection.bullet === ""  ? null :
                                                <ul>
                                                    {subsection.bullet.map((bullet, index) => (
                                                        <li key={index} tabIndex="0">{bullet}</li>
                                                    ))}
                                                </ul>
                                            }
                                            {subsection.link === undefined || subsection.link === ""  ? null :
                                                <a href={subsection.link.url} target="new">{subsection.link.text}</a>
                                            }
                                        </div>
                                    </div>
                                    <div className="col">
                                        {subsection.subsectionImage === undefined || subsection.subsectionImage.image === ""  ? null :
                                         <Suspense fallback={<div></div>}>
                                            <LazyLoad key={index} offset={400} throttle={50}>
                                                <ProgressiveImageHook
                                                    key={index}
                                                    src={require('./images/' + pdp.path + subsection.subsectionImage.image)}
                                                    placeholder={require('./images/' + pdp.path + subsection.subsectionImage.image.replace(".png" || ".gif" || ".jpg", "_placeholder.png"))}
                                                    alt={subsection.subsectionImage.alt}
                                                    tabIndex={0}
                                                />
                                            </LazyLoad>
                                        </Suspense>
                                        }

                                            {subsection.subsectionVideo === undefined || subsection.subsectionVideo.video === ""  ? null :
                                             <Suspense fallback={<div></div>}>
                                                <LazyLoad key={index} offset={400} throttle={50}>
                                                      <video autoPlay muted loop src={require('./images/' + pdp.path + subsection.subsectionVideo.video)}></video>
                                                </LazyLoad>
                                            </Suspense>
                                            }
                                        
                                    </div>
                                </div>
                            ))}            
                        </section>
                    ))}
                </article>
                <div className="next-project-section">
                    <div id={`load-next-item${index}`} className="next-project-intro">  
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default Project;
