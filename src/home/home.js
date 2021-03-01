import React, { useState, lazy } from "react";
import { homePageProjects } from '../data-feed/hp-feed';
import { Bio } from './components/home--bio';
import { About } from './components/home---about-me';
import { Link } from "react-router-dom/index";
import { HeroVideo } from "./components/hero--video";
import { Footer } from "../footer/footer";
import { Helmet } from "react-helmet";
import "./home.css";
const LazyLoad = lazy(() => import('react-lazy-load'));

const footerStyle = {
    height: "auto"
}
const HomePage = (props) => {
    function projectImageOpen(e) {
        const project = e.target;
        const currentProjectPosition = project.getBoundingClientRect();
        props.PreviewPosition(currentProjectPosition);
        props.HpReferrer(true);
        window.scrollTo(0, 0);
        document.getElementById("project-page").focus();
    }
    function projectImageOpenButton(e) {
        const project = e.target.parentNode.parentNode.firstChild;
        const currentProjectPosition = project.getBoundingClientRect();
        props.PreviewPosition(currentProjectPosition);
        props.HpReferrer(true);
        window.scrollTo(0, 0);
        document.getElementById("project-page").focus();
    }
    function pressEnter(e) {
        if(e.key === 'Enter'){
            videoButton(e)
          } return;
    }
    const [videoPlaying, setVideoPlaying] = useState(false);
    function videoButton(e) {
        const video = document.getElementById("hero-video");
        video.src = "/hero-video.mp4";
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
       
    return (
        <div id="homepage" className="homepage">
            <Helmet>
                <title>Lucky For Sum | UX/UI Design Portfolio | Sumner Bhandal</title>
                <meta name="description" content="The digital portfolio of Sumner Bhandal. Senior User Interface Designer with a fondness for front-end development and inclusive design." />  
                <meta name="keywords" content="portfolio,UX,user experience,UI,user interface,product design, designer, digital design,online,digital, support, community, injury, snippets, acl, support community, acl injury, design snippets"/>
            </Helmet>
            <div id="introSection" className="introSection hp-section section">
                <HeroVideo pressEnter={pressEnter} videoButton={videoButton} videoPlaying={videoPlaying} />
                <Bio />
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
            <div id="about" className="introSection hp-section section">
                <LazyLoad offset={400} throttle={50}>
                    <About />
                </LazyLoad>
            </div>
            <div style={footerStyle} className="hp-section">
                <Footer />
            </div>
        </div>
    );
}

  export default HomePage;