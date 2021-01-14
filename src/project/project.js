import { MarketingBanner, MarketingBannerTwo } from '../banners/marketing-banner';
import React, { useEffect, useState } from "react";
import './project.css'
import { homePageProjects } from '../data-feed/project-feed';

export const Project = (props) => {

    const verticalPosition = props.position == null ? 0 : props.position.y;
    const leftPosition = props.position == null ? 0 : props.position.x;

    const projectID = window.location.href.split('pid-')[1];
    const pdp = homePageProjects[projectID];
    const imagePath = pdp.path;
    const projectPreviewPosition = {
        top: verticalPosition,
        left: leftPosition,
        position: "fixed",
        transform: "rotate(0deg)"
    }

    const [scrollY, setScrollY] = useState(0);

    function logit() {
      setScrollY(window.pageYOffset);
      console.log(scrollY);
      console.log(window.innerHeight);

      if ((window.innerHeight + ( scrollY - 64)) >= document.body.offsetHeight) {
        console.log("you're at the bottom of the page");
        //show loading spinner and make fetch request to api
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


    return (
        <div className="project-preview-container header">
                <div className="project-preview">
                    <div style={projectPreviewPosition} className="project-preview-thumbnail header">
                        <img src={require('./images/' + imagePath + 'header.png')} alt={pdp.headerAlt}  />
                    </div>
                    <MarketingBannerTwo message={pdp.title} />
                </div>
                
                <article className="project-content section" >
                    <section>
                        <p className="intro" tabIndex="0" role="article">{pdp.intro}</p>
                    </section>
                    {pdp.article.map((content, index) => (
                        <section key={index}>
                            <h2 role="heading" aria-level="2" tabIndex="0">
                            {content.h2}
                            {console.log(content.subsection)}
                        </h2>
                        {content.subsection.map((subsection, index) => (
                           <div className="col">
                            <h3 role="heading" aria-level="3" tabIndex="0">
                                {subsection.h3}
                                {console.log(subsection.copy)}
                            </h3>
                                {subsection.copy.map((copy, index) => (
                                    <p tabIndex="0">{copy}</p>
                                ))}
                             </div>
                        ))}
                        </section>
                    ))}
                </article>
                <div className="next-project-section">
                    <div className="next-project-intro">
                        <h4>Next Project intro</h4>
                    </div>
                </div>
        </div>
    )
}
