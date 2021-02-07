import { MarketingBannerTwo } from '../banners/marketing-banner';
import React, { useEffect, useState } from "react";
import './project.css'
import { homePageProjects } from '../data-feed/project-feed';

export const Project = (props) => {
    const target = React.createRef();
    const verticalPosition = props.position == null ? 0 : props.position.y;
    const leftPosition = props.position == null ? 0 : props.position.x;
    const projectIndex = window.location.href.split('pid-')[1];

    const [projectsShown, setProjectsShown] = useState([homePageProjects[projectIndex]])
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

    document.title = projectsShown[0].title + "| Lucky For Sum" ;

    return (
        <div ref={props.target}>
        {projectsShown.map((pdp, index) => (
            <div className="project-preview-container header">
                <div className="project-preview">
                    <div style={projectPreviewPosition} className="project-preview-thumbnail header">
                        <img src={require('./images/' + pdp.path + 'header.png')} alt={pdp.headerAlt}  />
                    </div>
                    <MarketingBannerTwo message={pdp.title} />
                </div>
                <article className="project-content section">
                    <section>
                        {pdp.intro.map((paragraph, index) => (
                            <p className="intro" tabIndex="0">{paragraph}</p>
                        ))}
                    </section>
                    {pdp.article.map((content, index) => (
                        <section key={index}>
                            <h2 aria-level="2" tabIndex="0">
                            {content.h2}
                        </h2>
                        {content.subsection.map((subsection, index) => (
                        <div className="col">
                            {subsection.h3 === undefined ? null :
                            <h3 aria-level="3" tabIndex="0">
                                {subsection.h3}
                            </h3>
                            }
                                {subsection.copy.map((copy, index) => (
                                    <p tabIndex="0">{copy}</p>
                                ))}
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
