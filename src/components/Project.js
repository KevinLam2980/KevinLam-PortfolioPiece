import React from 'react'
import FadeInSection from './FadeInSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Project = props => {
    const { city } = props


    return (
        <article className="project">
            <div className="projectHeader">
                <FadeInSection>
                    <header>
                        <span className="date">{city.date}</span>
                        <h2>{city.title}</h2>
                    </header>
                    <img className="image-fit" src={require(`../assets/images/${city.img}.png`)} alt="Project screenshot" /> 
            </FadeInSection>
            </div>
            <div className="projectDescription">
                <FadeInSection>
                    <p>{city.description}</p>
                </FadeInSection>
            </div>
            <div className="projectButtons">
                <FadeInSection >
                    {
                    city.projectLink !== "" ? <a href={city.projectLink} target="_blank"  className="button" rel="noopener noreferrer">View Project</a> : null
                    }
                    {
                    city.githubLink !== "" ? <a href={city.githubLink} alt="Github repository link" className="button githubButton" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="githubIcon" icon={["fab", "github"]}/></a> : null
                    }     
                </FadeInSection>
            </div>
    
    
            
    </article> 
    )
}

export default Project