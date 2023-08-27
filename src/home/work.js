import React, { useState, lazy, useEffect, Suspense } from "react";
import { Link } from "react-router-dom/index";
import { Footer } from "../footer/footer";
import { Helmet } from "react-helmet";
import HPSkeleton from "./hp-skeleton";

import "./home.css";

const Project = lazy(() => import('../project/project'));
const ProgressiveImageHook = lazy(() => import('../reusable-functions/progressive-image-load'));


const WorkPage = (props) => {

    // Open Project

    function projectImageOpen(e) {
        const project = e.target;
        const currentProjectPosition = project.getBoundingClientRect();
        props.PreviewPosition(currentProjectPosition);
        props.HpReferrer(true);
    }

    // Feeds

    const [homePageProjects, setHomePageProjects] = useState(null);
    useEffect(() => {
      fetch("/hp-feed.json")
        .then((response) => response.json())
        .then((data) => {
            setHomePageProjects(data);
        });
    }, []);  
    const [blogProjects, setBlogProjects] = useState(null);
    useEffect(() => {
      fetch("/blog-feed.json")
        .then((response) => response.json())
        .then((data) => {
            setBlogProjects(data);
        });
    }, []);
       

    // Scroll Events

    const [loadProjects, setLoadProjects] = useState(false);
    const [scrolledIntoView, setScrolledIntoView] = useState(false);

    function scrollToContent(e) {
        setScrolledIntoView(true);
        document.getElementById('content').scrollIntoView();
    }

    function handleScroll() {
        setScrolledIntoView(true);
    };
    function logit() {
        setLoadProjects(true);    
    }

    useEffect(() => {
        const Hp = document.getElementById("root");
        function watchScroll() {
            Hp.addEventListener("scroll", logit);
            window.addEventListener('scroll', handleScroll);        
        }
        watchScroll();
        return () => {
            Hp.removeEventListener("scroll", logit);
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div id="work" className="homepage">
            <Helmet>
                <title>Lucky For Sum | Work | Sumner Bhandal</title>
                <meta name="description" content="The digital portfolio of Sumner Bhandal. Senior User Interface Designer with a fondness for front-end development and inclusive design." />  
                <meta name="keywords" content=""/>
            </Helmet>
            <div className="section-wrapper">
                <div id="Work" className="introSection hp-section section">
                <div className="aboutMeTwo">
                    <div className="aboutMe loadup">
                        <h1 aria-level="1" tabIndex="0">Work</h1>
                    </div>
                </div>
                </div>
            </div>
            <div className="crosshatch left"></div>

            <button className={!scrolledIntoView ? 'scroll-link' : 'scroll-link hide'} aria-label="button" onClick={scrollToContent} tabIndex={!scrolledIntoView ? "0" : "-1"}>
                <img tab-index="0" src={require('../home/images/arrow.svg')} alt="arrow" />
            </button> 

            <div className="section-wrapper core" id="content">
                <div className="area">
                    {!homePageProjects ? (
                        <HPSkeleton />
                    ) : (
                        homePageProjects.homePageProjects.map((item, index) => (
                        <div className="new-project-container" key={index}>
                            <div className="new-project-container-row">
                                <div className="col">
                                    <Link to={`/project/${item.url}-pid-${item.id}`} className="project-preview-thumbnail" id={item.id} title={item.url} onClick={projectImageOpen}  tabIndex="0">
                                    <h3>
                                        {item.title}
                                    </h3>
                                    </Link>
                                </div>
                                <div className="col">
                                    {item.intro.map((paragraph, index) => (
                                        <p key={index} className="intro" tabIndex="0">{paragraph}</p>
                                    ))}
                                </div>
                                <div className="col tags">
                                     {item.tags.map((paragraph, index) => (
                                        <div className="tag-container">
                                             <span key={index} className="tags" tabIndex="0">{paragraph}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="new-project-container-row">
                                <div className="col">
                                    <Link to={`/project/${item.url}-pid-${item.id}`} id={item.id} className="project-thumbnail" title={item.url} onClick={projectImageOpen}  tabIndex="0">
                                        <ProgressiveImageHook
                                            key={index}
                                            src={require('./images/' + item.thumbnail1)}
                                            placeholder={require('./images/' + item.thumbnail1.replace(".png" || ".gif" || ".jpg", "_placeholder.jpg"))}
                                            alt={item.thumbnail1Alt}
                                            tabIndex={-1}
                                        />
                                    </Link>
                                </div>
                                <div className="col">
                                <Link to={`/project/${item.url}-pid-${item.id}`} id={item.id} className="project-thumbnail" title={item.url} onClick={projectImageOpen}  tabIndex="0">
                                        <ProgressiveImageHook
                                            key={index}
                                            src={require('./images/' + item.thumbnail2)}
                                            placeholder={require('./images/' + item.thumbnail2.replace(".png" || ".gif" || ".jpg", "_placeholder.jpg"))}
                                            alt={item.thumbnail2Alt}
                                            tabIndex={-1}
                                        />
                                    </Link>
                                </div>
                                <div className="col">
                                <Link to={`/project/${item.url}-pid-${item.id}`} id={item.id} className="project-thumbnail" title={item.url} onClick={projectImageOpen}  tabIndex="0">
                                        <ProgressiveImageHook
                                            key={index}
                                            src={require('./images/' + item.thumbnail3)}
                                            placeholder={require('./images/' + item.thumbnail3.replace(".png" || ".gif" || ".jpg", "_placeholder.jpg"))}
                                            alt={item.thumbnail3Alt}
                                            tabIndex={-1}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))
                        )
                    }
                </div>
            </div>
            <div className="section-wrapper core">
                <div className="area">
                    <h2 aria-level="1" tabIndex="0">Articles</h2>
                    {!blogProjects ? (
                        <HPSkeleton />
                        ) : (
                            <div className="new-project-container">
                                <div className="new-project-container-row article">
                                    {
                                        blogProjects.blogArticles.slice(7,11).map((item, index) => (
                                            <div className="col article">
                                                <Link className="blog-image-thumbnail" to={`/blog/article/${item.title.replace(/ /g, '-').toLowerCase()}-pid-${item.id}`} id={item.id}  onClick={projectImageOpen}>                                                       
                                                    <img src={require('./images/' + item.image)} alt={item.alt}/>
                                                </Link>
                                                <Link to={`/blog/article/${item.title.replace(/ /g, '-').toLowerCase()}-pid-${item.id}`} id={item.id} title={item.url} onClick={projectImageOpen}  tabIndex="0">
                                                    <h4>
                                                        {item.title}
                                                    </h4>
                                                </Link>
                                                {item.intro.map((paragraph, index) => (
                                                    <p key={index} className="intro" tabIndex="0">{paragraph}</p>
                                                    
                                                    ))
                                                }
                                            </div>
                                        ))}
                                </div>
                            </div>                  
                        )
                    }
                </div>
            </div>
            <div className="hp-section footer-section">
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

  export default WorkPage;