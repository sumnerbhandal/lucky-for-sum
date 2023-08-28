import React, { useState, lazy, useEffect, Suspense } from "react";
import { Link } from "react-router-dom/index";
import { Footer } from "../footer/footer";
import { Helmet } from "react-helmet";
import "./blog.css";
import "../home/home.css";

const Project = lazy(() => import('../project/project'));
const ProgressiveImageHook = lazy(() => import('../reusable-functions/progressive-image-load'));


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



const Blog = (props) => {

    // Open Project

    function projectImageOpen(e) {
        const project = e.target;
        const currentProjectPosition = project.getBoundingClientRect();
        props.PreviewPosition(currentProjectPosition);
        props.HpReferrer(true);
    }

    // Feeds

    const [blogArticles, setblogArticles] = useState(null);
    useEffect(() => {
      fetch("/blog-feed.json")
        .then((response) => response.json())
        .then((data) => {
            setblogArticles(data);
        })
    }, []);


    // Scroll Events

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
          }, "0");
      }, []);

    const [loadProjects, setLoadProjects] = useState(false);
    const [scrolledIntoView, setScrolledIntoView] = useState(false);


    function scrollToContent(e) {
        setScrolledIntoView(true);
        document.getElementById('articles').scrollIntoView();
    }

    function logit() {
        setLoadProjects(true);    
    }
    function handleScroll() {
        setScrolledIntoView(true);
    };
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
        <div id="blog" className="blogpage">
            <Helmet>
                <title>Lucky For Sum | Articles | Sumner Bhandal</title>
                <meta name="description" content="The digital portfolio of Sumner Bhandal. Senior User Interface Designer with a fondness for front-end development and inclusive design." />  
                <meta name="keywords" content=""/>
            </Helmet>
            <div className="section-wrapper">
                <div id="Work" className="introSection hp-section section">
                <div className="aboutMeTwo">
                    <div className="aboutMe loadup">
                        <h1 aria-level="1" tabIndex="0">Articles</h1>
                    </div>
                </div>
                </div>
            </div>
            <div className="crosshatch left"></div>

            <button className={!scrolledIntoView ? 'scroll-link' : 'scroll-link hide'} aria-label="button" onClick={scrollToContent} tabIndex={!scrolledIntoView ? "0" : "-1"}>
                <img tab-index="0" src={require('../home/images/arrow.svg')} alt="arrow" />
            </button> 
          
            <div className="article-container" id="articles">
                <div className="articles loadup-two">
                                {!blogArticles ? (
                                <HPTemplate />
                            ) : (
                                    blogArticles.blogArticles.slice(0).reverse().map((item, index) => (
                                        <div tabIndex="0" className="card" key={index}>
                                            <Link  to={`article/${item.title.replace(/ /g, '-').toLowerCase()}-pid-${item.id}`} onClick={projectImageOpen}>
                                                <div tabIndex="-1" className="image-container">
                                                    {/* <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/08/20221130_Pnk_EbruYildiz_289_WEB_RT-SQUARE-1440x716.jpeg" /> */}
                                                    <ProgressiveImageHook
                                                            key={index}
                                                            src={require('../project/images/blog/' + item.image)}
                                                            placeholder={require('../project/images/blog/' + item.image.replace(".png" || ".gif" || ".jpg", "_placeholder.png"))}
                                                            alt={item.imageAlt}
                                                            // tabIndex={0}
                                                        />
                                                </div>
                                            </Link>
                                            <Link  to={`article/${item.title.replace(/ /g, '-').toLowerCase()}-pid-${item.id}`} onClick={projectImageOpen}>
                                                <h2 tabIndex="0" >
                                                    {item.title}
                                                </h2>
                                            </Link>
                                            <div className="tag-container">
                                                {item.tags.map((paragraph, index) => (
                                                    <span key={index} className="tags" tabIndex="0">{paragraph}</span>
                                                ))}
                                            </div>
                                            {item.intro.map((paragraph, index) => (
                                                <p key={index} tabIndex="0">{paragraph}</p>
                                            ))}
                                            {/* <Link tabIndex="-1" className="buttonLink" to={`article/${item.title.replace(/ /g, '-').toLowerCase()}-pid-${item.id}`} onClick={projectImageOpenButton}>
                                                <button className="block">Read Article</button>
                                            </Link> */}
                                        </div>
            
                                    ))
                                )
                            }

                            </div>
                <Footer />
                <Suspense fallback={<div></div>}>
            {loadProjects ? (
                <div style={{display: "none"}}>
                    <Project/>
                </div>
            ) : null}
            </Suspense>
        </div>
        </div>
    );
}

  export default Blog;