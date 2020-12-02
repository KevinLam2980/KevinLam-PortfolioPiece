import React from 'react'
import Styled from 'styled-components'

const SkillDiv = Styled.div`
display: inline-block;
.skillLabel {
    margin: 0 auto;
    text-align: center;
    color: #212931;
}
.featuredSkillIcon {
width: 100px;
height: 100px;
margin: 1.5rem;
@media (max-width: 520px) { 
    width: 75px !important;
	height: 75px !important;
}
}
&:hover {
    transform: scale(1.1);
    transition: 0.75s;
}
`

const Skill = props => {
    const {skill} = props

    return (
        <SkillDiv>
            {
            skill.imgType === "png" ? <img className="featuredSkillIcon" src={require(`../assets/images/SkillsImages/${skill.img}.png`)} alt={skill.alt}/> : 
            skill.imgType === "svg" ? <img className="featuredSkillIcon" src={require(`../assets/images/SkillsImages/${skill.img}.svg`)} alt={skill.alt}/> : 
            skill.imgType === "jpeg" ? <img className="featuredSkillIcon" src={require(`../assets/images/SkillsImages/${skill.img}.jpeg`)} alt={skill.alt}/> :
            skill.imgType === "webp" ? <img className="featuredSkillIcon" src={require(`../assets/images/SkillsImages/${skill.img}.webp`)} alt={skill.alt}/> : null
            }
            <p className="skillLabel">{skill.label}</p>
        </SkillDiv>
    )
}

export default Skill