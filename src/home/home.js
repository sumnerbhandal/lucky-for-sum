import React, {useState} from "react";
import { homePageProjects } from '../data-feed/hp-feed';
import { Bio } from './components/home--bio';
import { Link, useNavigate } from "react-router-dom/index";
import { HeroVideo } from "./components/hero--video";
import { Footer } from "../footer/footer";
import {Helmet} from "react-helmet";
import "./home.css";

const footerStyle = {
    height: "auto"
}

const HomePage = (props) => {
    const history = useNavigate();

    function projectImageOpen(e) {
        const project = e.target;
        e.preventDefault();
        const projectLink = project.getAttribute('href');
        const currentProjectPosition = project.getBoundingClientRect();
        project.style.transform = "scale(0.85)";
        props.PreviewPosition(currentProjectPosition);
        props.HpReferrer(true);
        window.scrollTo(0, 0);
        setTimeout(function(){ 
            history(projectLink);
            project.style.opacity = 0;
        }, 400);
        setTimeout(function(){ 
            project.style.transform = "";
            project.style.opacity = 1;
        }, 2000);
    }
    function projectImageOpenButton(e) {
        const project = e.target.parentNode.parentNode.firstChild;
        e.preventDefault();
        const projectLink = project.getAttribute('href');
        const currentProjectPosition = project.getBoundingClientRect();
        project.style.transform = "scale(0.85)";
        props.PreviewPosition(currentProjectPosition);
        props.HpReferrer(true);
        window.scrollTo(0, 0);
        setTimeout(function(){ 
            history(projectLink);
            project.style.opacity = 0;
        }, 400);
        setTimeout(function(){ 
            project.style.transform = "";
            project.style.opacity = 1;
        }, 2000);
    }
    function pressEnter(e) {
        if(e.key === 'Enter'){
            videoButton(e)
          } return;
    }
    const [videoPlaying, setVideoPlaying] = useState(false);
    function videoButton(e) {
        const video = document.getElementById("hero-video");
        if (videoPlaying) {
            setVideoPlaying(false);
            video.pause();
        } else {
            setVideoPlaying(true);
            video.play(); 
        }
        video.onended = function() {
            setVideoPlaying(false);
        };
    }
    
    document.title = "Lucky For Sum | UX/UI Design | Sumner Bhandal" ;
       
    return (
        <div id="homepage" className="homepage">
            <Helmet>
                <title>Lucky For Sum | UX/UI Design Portfolio | Sumner Bhandal</title>
                <meta name="description" content="The digital portfolio of Sumner Bhandal. Senior User Interface Designer with a fondness for front-end development and inclusive design." />  
                <meta name="keywords" content="portfolio,UX,user experience,UI,user interface,product design, designer, digital design,online,digital, support, community, injury, snippets, acl, support community, acl injury, design snippets"/>
            </Helmet>
            <div id="introSection" className="introSection hp-section section">
                < HeroVideo pressEnter={pressEnter} videoButton={videoButton} videoPlaying={videoPlaying} />
                < Bio />
            </div>
            {homePageProjects.map((item, index) => (
                <div className="project-preview-container hp-section" id="project-container" key={index}>
                    <div className={`project-preview `}>
                        <Link to={`/project/${item.url}-pid-${item.id}`} className="project-preview-thumbnail" id={item.id} title={item.url} onClick={projectImageOpen}  tabIndex="0">
                            {item.image}
                        </Link>
                        <h2>
                            {item.title}
                        </h2>
                        <p className="project-summary">
                            {item.summary}
                        </p>
                        <Link className="buttonLink" to={`/project/${item.url}-pid-${item.id}`} onClick={projectImageOpenButton}>
                            <button className="block">View Project</button>
                        </Link>
                    </div>
                    <div className={`image-right`}>
                        {item.intro.map((paragraph, index) => (
                    <p key={index} className="intro" tabIndex="0">{paragraph}</p>
                        ))}
                    </div>
                </div>
            ))}
            
            <div style={footerStyle} className="hp-section">
                <Footer />
            </div>
        </div>
    );
}

  export default HomePage;