import React from 'react'
import FadeInSection from './FadeInSection'
import Skill from './Skill'
import featuredSkillsRepo from '../assets/data/featuredSkillsRepo'
import AdditionalSkillsRepo from '../assets/data/additionalSkillsRepo'
import Styled from 'styled-components'
import additionalSkillsRepo from '../assets/data/additionalSkillsRepo'


const SkillsDiv = Styled.div`
.featuredSkillsContainer, .additionalSkillsContainer {
    margin-top: 2rem;
}
.featuredSkillIcon {
width: 100px;
height: 100px;
margin: 1.5rem;
&:hover {
    transform: scale(1.25);
    transition: 0.75s;
}
}
`

const Skills = () => {

    return(
        <SkillsDiv id="main">
            <article className="post">
                <header className="major">
                    <h2 className="skillsHeaders">Featured Skills</h2>
                    <FadeInSection>
                    <div className="featuredSkillsContainer">
                        {
                            featuredSkillsRepo.map(skill => {
                                return <Skill skill={skill}/> 
                            })
                        }
                    </div>
                    </FadeInSection>
                </header>
            </article>
            <article className="post">
                <header className="major">
                    <h2 className="skillsHeaders">Additional Skills</h2>
                    <FadeInSection>
                    <div className="additionalSkillsContainer">
                    {
                            additionalSkillsRepo.map(skill => {
                                return <Skill skill={skill}/> 
                            })
                        }
                    </div>
                    </FadeInSection>
                </header>
            </article>
        </SkillsDiv>
    )
}

export default Skills