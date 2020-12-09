import React from 'react'
import listOfProjects from '../assets/data/projectsRepo'
import Project from './Project'

const Projects = props => {

    return (
        <div id="main">
            <article className="post">
                <header className="major">
                    <h2 id="project-label">Projects</h2>
                </header>
            </article>

            <section className="posts">
                {listOfProjects.map(project => {
                    return <Project city={project}/>
                })}
            </section>
        </div>

    )
}

export default Projects