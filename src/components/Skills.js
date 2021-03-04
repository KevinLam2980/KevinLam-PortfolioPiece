import React from 'react'
import FadeInSection from './FadeInSection'
import Skill from './Skill'
import {frontendSkills, backendSkills} from '../assets/data/featuredSkillsRepo'
import Styled from 'styled-components'
import additionalSkillsRepo from '../assets/data/additionalSkillsRepo'


const SkillsDiv = Styled.div`
.featuredSkillsContainer, .additionalSkillsContainer {
    margin-top: 2rem;
}
.featuredSkillIcon {
width: 50px;
height: 50px;
margin: 1.5rem;
&:hover {
    transform: scale(1.25);
    transition: 0.75s;
}
}
.skillsHeaders {
    width: 100%;
}
.featuredSkillsContainer {
    width: 100%;
}
`

const Skills = () => {

    return (
        <SkillsDiv id="main" className="aboutMeComponent">
            <article className="post">
                <header className="major aboutMe">
                    <h2 className="aboutMeHeader">About me</h2>
                    <FadeInSection>
                        <div className="aboutSection">
                          <p><strong id="aboutIntro">Hello!</strong> My name is Kevin, I am a passionate full stack developer who can get carried away with time while thinking about the little details of my projects. I have a track record of building applications using modern frameworks, I love building and desigining the look and functionality of challenging projects, and I get immense satisfaction out of knowing that there are people in this world who have used and experienced something that I created. I pride myself over the idea of being a forever student who is always working to hone my skills, better myself, and progress my career. When I'm not developing, playing around with new technologies, or keeping up with the latest development trends and best practices, I'm usually thinking about astrophysics, video editing, listening to music, mining cripto, or playing games during my spare time.</p> 
                          <p> If you'd like to find out more about what I've been working on, or you have an interesting project idea that you might want to talk to a developer about, please don't hesitate to contact me. I look forward to hearing from you!</p>
                        </div>
                    </FadeInSection>
                </header>
            </article>
            <article className="post">
                <header className="major">
                    <h2 className="skillsHeaders">Front-End Skills</h2>
                    <FadeInSection>
                        <div className="featuredSkillsContainer">
                            {
                                frontendSkills.map(skill => {
                                    return <Skill skill={skill} />
                                })
                            }
                        </div>
                    </FadeInSection>
                </header>
            </article>
            <article className="post">
                <header className="major">
                    <h2 className="skillsHeaders">Back-End Skills</h2>
                    <FadeInSection>
                        <div className="featuredSkillsContainer">
                            {
                                backendSkills.map(skill => {
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
                        <div className="featuredSkillsContainer">
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