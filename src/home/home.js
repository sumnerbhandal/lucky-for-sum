import React, {useState} from "react";
import { homePageProjects } from '../data-feed/hp-feed';
import { Bio } from './components/home--bio';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom/index";
import { HeroVideo } from "./components/hero--video";
import { DesignSnippets } from "./components/design--snippets";
import { Footer } from "../footer/footer";
import {Helmet} from "react-helmet";
import "./home.css";


const footerStyle = {
    height: "auto"
}

const HomePage = (props) => {
    function projectImageOpen(e) {
        const project = e.target;
        const currentProjectPosition = project.getBoundingClientRect();
        project.style.background = "#FEC155";
        project.parentNode.style.transform = "scale(0.92)";
        props.PreviewPosition(currentProjectPosition);
        window.scrollTo(0, 0);
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
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    
    document.title = "Lucky For Sum | UX/UI Design | Sumner Bhandal" ;
       
    return (
        <div id="homepage" className="homepage">
            <Helmet>
                <title>Lucky For Sum | UX/UI Design Portfolio | Sumner Bhandal</title>
                <meta name="description" content="The digital portfolio of Sumner Bhandal. Senior User Interface Designer with a fondness for front-end development and inclusive design." />  
                <meta name="keywords" content="portfolio,UX,user experience,UI,user interface,product design, designer, digital design,online,digital, support, community, injury, snippets, acl, support community, acl injury, design snippets"/>
            </Helmet>
            <div id="introSection" className="introSection hp-section section">
                < HeroVideo pressEnter={pressEnter} videoButton={videoButton} ref={ref} videoPlaying={videoPlaying} />
                < Bio />
            </div>
            {homePageProjects.map((item, index) => (
                <div className="project-preview-container hp-section" id="project-container" key={index}>
                    <div className={`project-preview ${inView ? "before" : ""}`}>
                        <Link to={`/project/${item.url}-pid-${item.id}`} className="project-preview-thumbnail" id={item.id} title={item.url} onClick={projectImageOpen}  tabindex="0">
                            {item.image}
                        </Link>
                        <h2>
                            {item.title}
                        </h2>
                    </div>
                    <div className={`image-right ${inView ? "before" : ""}`}>
                        {item.intro.map((paragraph, index) => (
                    <p className="intro" tabIndex="0">{paragraph}</p>
                        ))}
                    </div>
                </div>
            ))}
            <DesignSnippets />
            <div style={footerStyle} className="hp-section">
                <Footer />
            </div>
        </div>
    );
}

  export default HomePage;