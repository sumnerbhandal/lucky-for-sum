import { useNavigate } from "react-router-dom/index";
import React, {useState, useEffect} from "react";
import "./home.css";
import heroVideo from './video/hero-video.mp4'
import { homePageProjects } from '../data-feed/hp-feed';
import { Bio } from './home--bio';
import { useInView } from 'react-intersection-observer';

const HomePage = (props) => {

    let navigate = useNavigate();
    function projectImageOpen(e) {
        const project = e.target;
        const currentProjectPosition = project.getBoundingClientRect();
        project.style.background = "#FEC155";
        project.parentNode.style.transform = "scale(0.92)";
        props.PreviewPosition(currentProjectPosition);
        setTimeout(function(){ 
            navigate(`/project/${project.title}_pid-${project.id}`);
            window.scrollTo(0, 0);
        }, 500);
    }
    function pressEnter(e) {
        if(e.key === 'Enter'){
            projectImageOpen(e)
          } return;
    }

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.2,
    });
    
    document.title = "Lucky For Sum | UX/UI Design | Sumner Bhandal" ;
      

    
       
    return (
        <div id="homepage" className="homepage">
            <div className="introSection hp-section section">
                <div className="heroVideo--container"> 
                    <video playsInline className="heroVideo" controls controlsList="nofullscreen nodownload" src={heroVideo} type="video/mp4"  ref={ref} />
                </div>
            </div>
            <div className="bioSection hp-section section">
                < Bio />
            </div>
            {homePageProjects.map((item, index) => (
            <div className="project-preview-container hp-section">
                <a className={`project-preview ${inView ? "before" : ""}`} key={index}>
                    <div className="project-preview-thumbnail" id={item.id} title={item.url} onClick={projectImageOpen} onKeyPress={pressEnter} tabindex="0" role="link">
                        <img src={require('./images/' + item.image + '.png')} alt={item.title}  />
                    </div>
                    <h2>
                        {item.title}
                    </h2>
                </a>
                <div className={`image-right ${inView ? "before" : ""}`}>
                    {item.intro.map((paragraph, index) => (
                    <p className="intro" tabIndex="0" role="article">{paragraph}</p>
                    ))}
                </div>
            </div>
            ))}  
        </div>
    );
}

  export default HomePage;