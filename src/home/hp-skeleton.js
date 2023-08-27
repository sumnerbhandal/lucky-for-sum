import React from "react";


const numberOfProjects = [
    "1", "2", "3", "4"
]

const cols = [
    "1", "2", "3"
]
const HPSkeleton = () => {
    return (
        numberOfProjects.map((item, index) => (
            <div className="new-project-container" key={index}>
                <div className="new-project-container-row">
                    <div className="col">
                        <a href="/" className="project-preview-thumbnail" tabIndex="0">
                        <h3>
                           Project
                        </h3>
                        </a>
                    </div>
                    <div className="col">
                        Copy
                    </div>
                    <div className="col tags">
                           Copy
                    </div>
                </div>
                <div className="new-project-container-row">
                    {cols.map((item, index) => (
                        <div className="col" key={index}>
                            <a href="/" className="project-thumbnail" tabIndex="0">
                                <img src={require('../project/images/blog/placeholder.png')} alt="placeholder" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        ))
    
    );
};

export default HPSkeleton;