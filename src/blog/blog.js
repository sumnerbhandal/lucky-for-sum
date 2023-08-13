import React, { useState, lazy, useEffect, Suspense } from "react";
import { Link } from "react-router-dom/index";
import { Footer } from "../footer/footer";
import { Helmet } from "react-helmet";
import "./blog.css";
const LazyLoad = lazy(() => import('react-lazy-load'));
const Project = lazy(() => import('../project/project'));
const ProgressiveImageHook = lazy(() => import('../reusable-functions/progressive-image-load'));

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



const Blog = (props) => {

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
    const [loadProjects, setLoadProjects] = useState(false);
    function logit() {
        setLoadProjects(true);    
    }
    // useEffect(() => {
    //     const Hp = document.getElementById("blog");
    //     function watchScroll() {
    //         Hp.addEventListener("scroll", logit);
    //     }
    //     watchScroll();
    //     return () => {
    //         Hp.removeEventListener("scroll", logit);
    //     };
    // });

    const [blogArticles, setblogArticles] = useState(null);
    useEffect(() => {
      fetch("/blog-feed.json")
        .then((response) => response.json())
        .then((data) => {
            setblogArticles(data);
        })
    }, []);
    // useEffect(() => {
    //     if (blogArticles != undefined) {
    //         setblogArticles(blogArticles.blogArticles.toReversed())
    //     } else return;
    //   }, []);
    //
       
    return (
        <div id="blog">
            <div className="section">
                <Helmet>
                    <title>Lucky For Sum | About Me | Sumner Bhandal</title>
                    <meta name="description" content="The digital portfolio of Sumner Bhandal. Senior User Interface Designer with a fondness for front-end development and inclusive design." />  
                    <meta name="keywords" content="portfolio,UX,user experience,UI,user interface,product design, designer, digital design,online,digital, support, community, injury, snippets, acl, support community, acl injury, design snippets"/>
                </Helmet>
                <div className="hero">
                    <h1 tabIndex="0">Sum-thing to read</h1>
                </div>
            </div>
            <div className="article-container">
                <div className="articles">
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
                                            <Link  to={`article/${item.title.replace(/ /g, '-').toLowerCase()}-pid-${item.id}`} onClick={projectImageOpenButton}>
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
        </div>
        </div>
    );
}

  export default Blog;