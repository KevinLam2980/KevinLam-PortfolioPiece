import React from 'react'
import FadeInSection from './FadeInSection'
import Skill from './Skill'
import featuredSkillsRepo from '../assets/data/featuredSkillsRepo'
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

    return (
        <SkillsDiv id="main">
            <article className="post">
                <header className="major">
                    <h2 className="aboutMeHeader">About me</h2>
                    <FadeInSection>
                        <div className="aboutSection">
                          <p>Welcome! My name is Kevin. I love building and desigining the look and functionality of web applications and will never get over the fact that such amazing things can be created with just a laptop and some will power. If you'd like to find out more about what I've been doing, please don't hesitate to contact me, as I will be looking forward from hearing from you.</p>
                        </div>
                    </FadeInSection>
                </header>
            </article>
            <article className="post">
                <header className="major">
                    <h2 className="skillsHeaders">Featured Skills</h2>
                    <FadeInSection>
                        <div className="featuredSkillsContainer">
                            {
                                featuredSkillsRepo.map(skill => {
                                    return <Skill skill={skill} />
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
                                    return <Skill skill={skill} />
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