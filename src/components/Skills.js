import React from 'react'
import Styled from 'styled-components'
import FadeInSection from './FadeInSection'


const SkillsDiv = Styled.div`
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
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/HTML.png")} alt="HTML"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/CSS.png")} alt="CSS"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/logo-javascript.svg")} alt="Javscript"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/react.webp")} alt="React"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/Java.png")} alt="Java"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/Spring.png")} alt="Java Spring"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/Redux.png")} alt="Redux"/>
                    </div>
                    </FadeInSection>
                </header>
            </article>
            <article className="post">
                <header className="major">
                    <h2 className="skillsHeaders">Additional Skills</h2>
                    <FadeInSection>
                    <div className="additionalSkillsContainer">
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/Python.png")} alt="Python"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/Node.png")} alt="Node"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/Git_icon.svg.png")} alt="Git"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/GitHub-Logo.wine.svg")} alt="Github"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/heroku.svg")} alt="Heroku"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/Postgresql_elephant.svg")} alt="PostgreSQL"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/VSCode.png")} alt="VS Code"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/IntelliJ.png")} alt="IntilliJ"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/Bootstrap.png")} alt="Bootstrap"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/Postman.png")} alt="Postman"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/Sass.png")} alt="Sass"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/LESS.svg")} alt="Less"/>
                        <img className="featuredSkillIcon" src={require("../assets/images/SkillsImages/Slack.png")} alt="Slack"/>
                    </div>
                    </FadeInSection>
                </header>
            </article>
        </SkillsDiv>
    )
}

export default Skills