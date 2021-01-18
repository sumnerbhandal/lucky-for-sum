import { useNavigate } from "react-router-dom/index";
import React, {useState, useEffect} from "react";
import "./home.css";
import heroVideo from './video/hero-video.mp4'
import { homePageProjects } from '../data-feed/hp-feed';
import { Bio } from './home--bio';

const HomePage = (props) => {

    let navigate = useNavigate();
    function projectImageOpen(e) {
        const project = e.target;
        const currentProjectPosition = project.getBoundingClientRect();
        project.style.background = "#FEC155";
        project.parentNode.style.transform = "scale(0.92)";
        props.PreviewPosition(currentProjectPosition);
        setTimeout(function(){ 
            navigate(`/project/${project.title}_pid-${project.id}`);
            window.scrollTo(0, 0);
        }, 500);
    }
    function pressEnter(e) {
        if(e.key === 'Enter'){
            projectImageOpen(e)
          } return;
    }

    
       
    return (
        <div id="homepage" className="homepage">
            <div className="introSection hp-section section">
                <div className="heroVideo--container"> 
                    <video playsInline className="heroVideo" controls controlsList="nofullscreen nodownload" src={heroVideo} type="video/mp4" />
                </div>
                < Bio />
            </div>
            {homePageProjects.map((item, index) => (
            <div className="project-preview-container hp-section">
                <a className="project-preview" key={index}>
                    <div className="project-preview-thumbnail" id={item.id} title={item.url} onClick={projectImageOpen} onKeyPress={pressEnter} tabindex="0" role="link">
                        <img src={require('./images/' + item.image + '.png')} alt={item.title}  />
                    </div>
                    <h2>
                        {item.title}
                    </h2>
                </a>
                {/* <div className="image-right">  <img src={require('./images/' + item.feature + '.png')} alt={item.title}  /></div> */}
                <div className="image-right"> <p className="intro" tabIndex="0" role="article">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc tortor, aliquet vitae convallis vitae, imperdiet ut diam. Vestibulum sit amet nulla vestibulum, fermentum dolor sed, sodales ante. Maecenas a enim pellentesque, interdum elit vulputate, consectetur nibh. Praesent quis dapibus nisi.</p> </div>
            </div>
            ))}  
        </div>
    );
}

  export default HomePage;