import React from 'react'
import FadeInSection from './FadeInSection'

const Project = props => {
    const { city } = props


    return (
        <article>    
        <FadeInSection>
            <header>
                <span className="date">{city.date}</span>
                <h2>{city.title}</h2>
            </header>
            <img className="image-fit" src={require(`../assets/images/${city.img}.png`)} alt="Project screenshot" />
            </FadeInSection>
            <FadeInSection>
            <p>{city.description}</p>
            </FadeInSection>
            <FadeInSection>
            <a href="city.projectLink" target="_blank"  className="button" rel="noopener noreferrer">View Project</a>
          </FadeInSection>
    </article> 
    )
}

export default Project