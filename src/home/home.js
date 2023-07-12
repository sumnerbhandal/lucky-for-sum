import React, { useState, lazy, useEffect, Suspense } from "react";
import { About } from './components/home---about-me';
import { Link } from "react-router-dom/index";
import { HeroVideo } from "./components/hero--video";
import { Footer } from "../footer/footer";
import { Helmet } from "react-helmet";
import "./home.css";

const Portfolio = lazy(() => import('./components/portfolio-illustration'));
const EnrichedSearch = lazy(() => import('./components/search-illustration'));
const Ligamend = lazy(() => import('./components/ligamend-illustration'));
const Heuristic = lazy(() => import('./components/heuristic-illustration'));
const Reality = lazy(() => import('./components/reality-illustration'));
const Project = lazy(() => import('../project/project'));


const footerStyle = {
    height: "auto"
}

const numberOfProjects = [
    "1", "2", "3", "4"
]
const HPTemplate = () => {
    return (
        numberOfProjects.map((item, index) => (
            <div className="project-preview-container hp-section" id={"project-container" + index} key={index}>
                <div className="project-preview">
                    <Link to="#" className="project-preview-thumbnail" tabIndex="0">
                        
                    </Link>
                    <h2>
                        Title
                    </h2>
                    <p className="project-summary">
                        Summary
                    </p>
                    <Link to="#" tabIndex="-1" className="buttonLink">
                        <button className="block">View Project</button>
                    </Link>
                </div>
                <div className="image-right">
                </div>
            </div>
        ))    
    );
};


const HomePage = (props) => {
    function projectImageOpen(e) {
        const project = e.target;
        const currentProjectPosition = project.getBoundingClientRect();
        props.PreviewPosition(currentProjectPosition);
        props.HpReferrer(true);
    }
    function projectImageOpenButton(e) {
        const project = e.target.parentNode.parentNode.firstChild;
        const currentProjectPosition = project.getBoundingClientRect();
        props.PreviewPosition(currentProjectPosition);
        props.HpReferrer(true);
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
    const [loadProjects, setLoadProjects] = useState(false);
    function logit() {
        setLoadProjects(true);    
    }
    useEffect(() => {
        const Hp = document.getElementById("homepage");
        function watchScroll() {
            Hp.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            Hp.removeEventListener("scroll", logit);
        };
    });

    const [homePageProjects, setHomePageProjects] = useState(null);
    useEffect(() => {
      fetch("/hp-feed.json")
        .then((response) => response.json())
        .then((data) => {
            setHomePageProjects(data);
        });
    }, []);  
       
    return (
        <div id="homepage" className="homepage">
            <Helmet>
                <title>Lucky For Sum | Design Portfolio | Sumner Bhandal</title>
                <meta name="description" content="The digital portfolio of Sumner Bhandal. Senior User Interface Designer with a fondness for front-end development and inclusive design." />  
                <meta name="keywords" content="portfolio,UX,user experience,UI,user interface,product design, designer, digital design,online,digital, support, community, injury, snippets, acl, support community, acl injury, design snippets"/>
            </Helmet>
            <div id="introSection" className="introSection hp-section section">
                <HeroVideo pressEnter={pressEnter} videoButton={videoButton} videoPlaying={videoPlaying} />
            </div>
            <div id="about" className="introSection hp-section section">
                <About />
            </div>
            {!homePageProjects ? (
                <HPTemplate />
            ) : (
                    homePageProjects.homePageProjects.map((item, index) => (
                        <div className="project-preview-container hp-section" id="project-container" key={index}>
                            <div className={`project-preview `}>
                                <Link to={`/project/${item.url}-pid-${item.id}`} className="project-preview-thumbnail" id={item.id} title={item.url} onClick={projectImageOpen}  tabIndex="0">
                                    <Suspense fallback={<div></div>}>
                                         {index === 0 ? <Heuristic /> : index === 1 ? <Portfolio />: index === 2 ?  <EnrichedSearch />: index === 3 ? <Reality/> : <Ligamend /> }
                                    </Suspense>
                                </Link>
                                <h2>
                                    {item.title}
                                </h2>
                                <p className="project-summary">
                                    {item.summary}
                                </p>
                                <Link tabIndex="-1" className="buttonLink" to={`/project/${item.url}-pid-${item.id}`} onClick={projectImageOpenButton}>
                                    <button className="block">View Project</button>
                                </Link>
                            </div>
                            <div className={`image-right`}>
                                {item.intro.map((paragraph, index) => (
                            <p key={index} className="intro" tabIndex="0">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    ))
                )
            }


            <div style={footerStyle} className="hp-section">
                <Footer />
            </div>
            <Suspense fallback={<div></div>}>
            {loadProjects ? (
                <div style={{display: "none"}}>
                    <Project/>
                </div>
            ) : null}
            </Suspense>
        </div>
    );
}

  export default HomePage;