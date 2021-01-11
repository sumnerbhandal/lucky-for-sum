import { useNavigate, Link } from "react-router-dom/index";
import { MarketingBanner, MarketingBannerTwo } from '../banners/marketing-banner';
import React, { useEffect, useState } from "react";
import './project.css'


const previews = [
    {
        "title": "Project Example 1",
        "image": "Illustration-1.png"
    },
]

export const Project = (props) => {
    const [previewListing, setPreviewListing] = useState(previews);
    const verticalPosition = props.position == null ? 0 : props.position.y;
    const leftPosition = props.position == null ? 0 : props.position.x;

    const imageSource = window.location.href.split('_')[1] + '.png';

    const projectPreviewPosition = {
        top: verticalPosition,
        left: leftPosition,
        position: "fixed",
        transform: "rotate(0deg)"
    }

    return (
        <div className="project-preview-container header">
             {previews.map((item, index) => (
                <div className="project-preview" >
                    <div style={projectPreviewPosition} className="project-preview-thumbnail header">
                        <img src={require('./images/' + imageSource)} alt={imageSource}  />
                    </div>
                    <MarketingBannerTwo message="Project Title Goes Here" />
                </div>))}
                
                <article className="project-content section" >
                    <section>
                        <p className="intro" tabIndex="0" role="article">Building a support community set up to aid the rehabilitation of people who have suffered an anterior cruciate ligament (ACL) injury.</p>
                    </section>
                    <section>
                        <h2 role="heading" aria-level="2" tabIndex="0">
                            Background
                        </h2>
                        <div className="col">
                            <h3 role="heading" aria-level="3" tabIndex="0">
                                The Anterior Cruciate Ligament (ACL)
                            </h3>
                            <p tabIndex="0">The ACL is one of four major ligaments in the knee, it serves to act as a stabiliser that prevents your knee from bending too far in any direction. The injury itself is commonly associated with sports that involve sudden stops and changes in direction, this can result in the ligament stretching or even tearing.</p>
                            <p tabIndex="0">The main course of action, for those who opt for it, is surgery followed by several months of physical therapy. It's safe to3say that the whole process is draining both mentally and physically, and the long road to recovery can be very isolating (which I learned the hard way).</p>
                        </div>
                    </section>
                    <section>
                        <h2 role="heading" aria-level="2" tabIndex="0">
                            Statement of Intent
                        </h2>
                        
                        <div className="col">
                            <h3 role="heading" aria-level="3" tabIndex="0">
                                Aims
                            </h3>
                            <p tabIndex="0">To create a positive, supportive community that can offer informative resources and a support network for people who have suffered from an anterior cruciate ligament injury.</p>
                        </div>
                        <div className="col">
                            <h3 role="heading" aria-level="3" tabIndex="0">
                                Outcomes
                            </h3>
                            <p tabIndex="0">To create a positive, supportive community that can offer informative resources and a support network for people who have suffered from an anterior cruciate ligament injury.</p>
                        </div>
                    </section>
                </article>
        </div>
    )
}
