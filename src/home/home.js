import React, {useState} from "react";
import "./home.css";
import heroVideo from './video/hero-video.mp4'
import { homePageProjects } from '../data-feed/hp-feed';
import { Bio } from './home--bio';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom/index";

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
                <video playsInline className="heroVideo" src={heroVideo} type="video/mp4" id="hero-video"  ref={ref} onClick={videoButton} onKeyPress={pressEnter} tabIndex="0" aria-label="Lucky for Sum promo video"  />
                {videoPlaying ? (
                    ""
                ) : (
                    <img role="button"
                    aria-label="Play Lucky for Sum promo video"
                    className="play-button"
                    src="https://i.ibb.co/hC6jqY7/01-atom-icon-utility-button-play-3x.png"
                    tabIndex="0"
                    onClick={videoButton}
                    onKeyPress={pressEnter}
                    />
                )}
                    
                </div>
            </div>
            <div className="bioSection hp-section section">
                < Bio />
            </div>
            {homePageProjects.map((item, index) => (
            <div className="project-preview-container hp-section" key={index}>
                <div className={`project-preview ${inView ? "before" : ""}`}>
                    <Link to={`/project/${item.url}_pid-${item.id}`} className="project-preview-thumbnail" id={item.id} title={item.url} onClick={projectImageOpen}  tabindex="0">
                        <img src={require('./images/' + item.image + '.png')} alt={item.title}  />
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
        </div>
    );
}

  export default HomePage;