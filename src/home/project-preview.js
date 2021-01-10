import { useNavigate, Link } from "react-router-dom/index";
import React, { useEffect, useState } from "react";


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


export const ProjectPreview = (props) => {
    let navigate = useNavigate();

    function projectImageOpen(e) {
        const project = e.target;
        const currentProjectPosition = project.getBoundingClientRect();
        project.style.background = "#FEC155";
        props.positionUpdate(currentProjectPosition);
        props.headerUpdate(project.value);
    }
    return (
        <div className="project-preview-container">
             {previews.map(item => (
            <a className="project-preview" >
                <div className="project-preview-thumbnail" value={item.image} onClick={projectImageOpen}>
                    <img src={require('./images/' + item.image + '.png')} alt={item.title}  />
                </div>
                <h2>
                    {item.title}
                </h2>
            </a>))}
        </div>
    )
}
