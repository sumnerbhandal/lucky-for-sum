import React, { useState, lazy, useEffect, Suspense } from "react";
import { Link } from "react-router-dom/index";
import { Footer } from "../footer/footer";
import { Helmet } from "react-helmet";
import "./home.css";

const Project = lazy(() => import('../project/project'));
const ProgressiveImageHook = lazy(() => import('../reusable-functions/progressive-image-load'));



const footerStyle = {
    height: "auto",
    zIndex: "2"
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
                    <h3>
                        Title
                    </h3>
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


const WorkPage = (props) => {
    const [scrolledIntoView, setScrolledIntoView] = useState(false);

    function projectImageOpen(e) {
        const project = e.target;
        const currentProjectPosition = project.getBoundingClientRect();
        props.PreviewPosition(currentProjectPosition);
        props.HpReferrer(true);
    }
    const [loadProjects, setLoadProjects] = useState(false);

    useEffect(() => {
        const Hp = document.getElementById("work");
        function watchScroll() {
            Hp.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            Hp.removeEventListener("scroll", logit);
        };
    });
    function logit() {
        setLoadProjects(true);    
    }

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
    // function scrollToContent(e) {
    //     setScrolledIntoView(true);
    //     document.getElementById('content').scrollIntoView();
    // } 
       
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

            {/* <button className={!scrolledIntoView ? 'scroll-link' : 'scroll-link hide'} aria-label="button" onClick={scrollToContent} tabIndex={!scrolledIntoView ? "0" : "-1"}>
                <img tab-index="0" src={require('../home/images/arrow.svg')} alt="arrow" />
            </button>  */}

            <div className="section-wrapper core" id="content">
                <div className="area">
                    {!homePageProjects ? (
                        <HPTemplate />
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
                                                placeholder={require('./images/' + item.thumbnail1.replace(".png" || ".gif" || ".jpg", "_placeholder.png"))}
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
                                                placeholder={require('./images/' + item.thumbnail3.replace(".png" || ".gif" || ".jpg", "_placeholder.png"))}
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
                                                placeholder={require('./images/' + item.thumbnail3.replace(".png" || ".gif" || ".jpg", "_placeholder.png"))}
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
                        <HPTemplate />
                    ) : (
                                <div className="new-project-container">
                                    <div className="new-project-container-row article">
                                        {
                                            blogProjects.blogArticles.slice(7,11).map((item, index) => (
                                                <div className="col article">
                                                     <Link className="blog-image-thumbnail" to={`/blog/article/${item.title.replace(/ /g, '-').toLowerCase()}-pid-${item.id}`} id={item.id}  onClick={projectImageOpen}>                                                       
                                                        <img src={require('../project/images/blog/' + item.image)} alt={item.alt}/>
                                                    </Link>
                                                    <Link to={`/blog/article/${item.title.replace(/ /g, '-').toLowerCase()}-pid-${item.id}`}  id={item.id} title={item.url} onClick={projectImageOpen}  tabIndex="0">
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

  export default WorkPage;