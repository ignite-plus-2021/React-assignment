import React from 'react'
import "./Projects.css"

const ProjectCard=({projectName,projectDescription,imageUrl,projectUrl})=> {
    return (
        <div className="project-card">
            <div className="image-container">
                <a>
                    <img src={imageUrl} alt="Project" className="project-image" />
                </a>
            </div>

            <div className="project-details-container">
                <h2 className="project-name">
                    {projectName}
                </h2>
                <p className="project-desc">
                    {projectDescription}
                </p>
            </div>
        </div>
    )
}
export default  ProjectCard;