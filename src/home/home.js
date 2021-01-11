import { useNavigate } from "react-router-dom/index";
import React, { useEffect, useState } from "react";
import "./home.css";
import heroVideo from './video/hero-video.mp4'
import {ProjectPreview} from './project-preview'

// const HomePageTemplate = () => {
//     return (
//         <div className="introSection">
//             <div className="heroVideo--container"> </div>
//         </div>
//     );
// }



const previews = [
    {
        "title": "Project Example 1",
        "image": "Illustration-1"
    },
    {
        "title": "Project Example 2",
        "image": "Illustration-2"
    },
    {
        "title": "Project Example 3",
        "image": "Illustration-3"
    }
]


const Bio = () => {
    return (
        <div className="aboutIntro">
            <h1 role="heading" aria-level="1" tabIndex="0">Hi, my name's Sumner 👋🏽</h1>
            <p tabIndex="0">I’m a Senior User Interface Designer with a fondness for front-end development and inclusive design.</p>
            <p tabIndex="0">Currently attempting to make digital interfaces a bit more humane.</p>
        </div>
    )

}
const HomePage = (props) => {

    let navigate = useNavigate();

    function projectImageOpen(e) {
        const project = e.target;
        const currentProjectPosition = project.getBoundingClientRect();
        project.style.background = "#FEC155";
        project.parentNode.style.transform = "scale(0.92)";
        props.PreviewPosition(currentProjectPosition);
        setTimeout(function(){ 
            navigate(`/project/_${project.id}`, { 
                state: {
                id: `hello`
                } 
            });
            window.scrollTo(0, 0);
        }, 500);
    }
    function pressEnter(e) {
        if(e.key === 'Enter'){
            projectImageOpen(e)
          } return;
    }
  
    return (
        <div className="section">
            <div className="introSection">
                <div className="heroVideo--container"> 
                    <video playsInline className="heroVideo" controls controlsList="nofullscreen nodownload" src={heroVideo} type="video/mp4" />
                </div>
                < Bio />
            </div>
            <h2 role="heading" aria-level="2" tabIndex="0">The Sizzle</h2>
            <div className="project-preview-container">
             {previews.map((item, index) => (
                <a className="project-preview" key={index}>
                    <div className="project-preview-thumbnail" id={item.image} onClick={projectImageOpen} onKeyPress={pressEnter} tabindex="0" role="link">
                        <img src={require('./images/' + item.image + '.png')} alt={item.title}  />
                    </div>
                    <h2>
                        {item.title}
                    </h2>
                </a>))}
          </div>    
        </div>
    );
}

  export default HomePage;