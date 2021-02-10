import React, {useState} from "react";
import { homePageProjects } from '../data-feed/hp-feed';
import { Bio } from './components/home--bio';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom/index";
import { HeroVideo } from "./components/hero--video";
import { DesignSnippets } from "./components/design--snippets";
import { Footer } from "../footer/footer";
import "./home.css";
import ProgressiveImageHook from "../reusable-functions/progressive-image-load";

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
            <div id="introSection" className="introSection hp-section section">
                < HeroVideo pressEnter={pressEnter} videoButton={videoButton} ref={ref} videoPlaying={videoPlaying} />
                < Bio />
               
            </div>
            {homePageProjects.map((item, index) => (
                <div className="project-preview-container hp-section" id="project-container" key={index}>
                    <div className={`project-preview ${inView ? "before" : ""}`}>
                        <Link to={`/project/${item.url}-pid-${item.id}`} className="project-preview-thumbnail" id={item.id} title={item.url} onClick={projectImageOpen}  tabindex="0">
                        <ProgressiveImageHook
                            key={index}
                            src={require('./images/' + item.image + '.png')}
                            placeholder={require('./images/' + item.image + '_placeholder.png')}
                            alt={item.title}
                        />
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