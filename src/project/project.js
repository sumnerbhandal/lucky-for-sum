import { MarketingBannerTwo } from '../banners/marketing-banner';
import React, { useEffect, useState } from "react";
import './project.css'
import { homePageProjects } from '../data-feed/project-feed';
import ProgressiveImageHook from "../reusable-functions/progressive-image-load";
import {Helmet} from "react-helmet";
import LazyLoad from 'react-lazy-load';



const Project = (props) => {
    const verticalPosition = props.position == null ? 0 : props.position.y;
    const leftPosition = props.position == null ? 0 : props.position.x;
    const projectIndex = window.location.href.split('pid-')[1];

    const [projectsShown, setProjectsShown] = useState([homePageProjects[projectIndex]]);
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
      setScrollY(window.pageYOffset);
  
      if ((window.innerHeight + ( scrollY + 0)) >= document.body.offsetHeight) {
        let loaderBlob = document.getElementById('load-next-item' + loaderAnimationId);
        const nextToBeLoaded = nextProjectIndex + 1;
        setNextProjectIndex(nextToBeLoaded);
        if (nextProjectIndex < homePageProjects.length) {
            loaderBlob.classList.add("loading");
            projectsShown.push(homePageProjects[nextProjectIndex]);
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

    const pageTitle = projectsShown[0].SEOTitle;
    const metaKeywords = projectsShown[0].keywords;
    const metaDescription = projectsShown[0].SEODescription;

    return (
        <div ref={props.target}>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
            </Helmet>
        {projectsShown.map((pdp, index) => (
            <div key={index} className="project-preview-container header">
                <div className="project-preview">
                    <div style={projectPreviewPosition} className="project-preview-thumbnail header">
                    {pdp.headerImage}
                    </div>
                    <MarketingBannerTwo message={pdp.title} />
                </div>
                <article className="project-content section">
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
                                <div className="featured-image-container">
                                      <LazyLoad offsetVertical={1000}>
                                        <ProgressiveImageHook
                                            key={index}
                                            src={require('./images/' + pdp.path + content.featuredImage.image)}
                                            placeholder={require('./images/' + pdp.path + content.featuredImage.image.replace(".png" || ".gif", "_placeholder.png"))}
                                            alt={content.featuredImage.alt}
                                        />
                                    </LazyLoad>
                                  
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
                                            {subsection.copy.map((copy, index) => (
                                                <p key={index} tabIndex="0">{copy}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col">
                                        {subsection.subsectionImage === undefined ? null :
                                        <LazyLoad key={index} offsetVertical={1000}>
                                            <ProgressiveImageHook
                                                key={index}
                                                src={require('./images/' + pdp.path + subsection.subsectionImage.image)}
                                                placeholder={require('./images/' + pdp.path + subsection.subsectionImage.image.replace(".png" || ".gif", "_placeholder.png"))}
                                                alt={subsection.subsectionImage.alt}
                                            />                                        
                                        </LazyLoad>
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
