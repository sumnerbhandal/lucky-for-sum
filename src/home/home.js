import { useNavigate } from "react-router-dom/index";
import React, {useState} from "react";
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
            navigate(`/project/pid-${project.id}`);
            window.scrollTo(0, 0);
        }, 500);
    }
    function pressEnter(e) {
        if(e.key === 'Enter'){
            projectImageOpen(e)
          } return;
    }


    // const [isLogoActive, setLogoActive] = useState(true);

    // const onScroll = e => {
    // //   setLogoActive(e.target.scrollTop < 100);
    // console.log(e);
    //   console.log("scrolled");
    //   e.scrollBy({
    //     top: 100,
    //     behavior: 'smooth'
    //   });
    // };

    return (
        <div className="homepage">
            <div className="introSection hp-section section">
                <div className="heroVideo--container"> 
                    <video playsInline className="heroVideo" controls controlsList="nofullscreen nodownload" src={heroVideo} type="video/mp4" />
                </div>
                < Bio />
            </div>
            {homePageProjects.map((item, index) => (
            <div className="project-preview-container hp-section">
        
                <a className="project-preview" key={index}>
                    <div className="project-preview-thumbnail" id={item.id} onClick={projectImageOpen} onKeyPress={pressEnter} tabindex="0" role="link">
                        <img src={require('./images/' + item.image + '.png')} alt={item.title}  />
                    </div>
                    <h2>
                        {item.title}
                    </h2>
                </a>
                <div className="image-right">Hi Res Image Preview Goes Here</div>
            </div>
            ))}  
        </div>
    );
}

  export default HomePage;