import React, {useEffect} from 'react'

const Projects = props => {

    useEffect(() => {
        document.getElementById("scrollerBTN").click()
      }, [])

    return (
        <div id="main">
            <article className="post">
                <header className="major">
                    <h2>Check out some of my projects</h2>
                </header>
            </article>

            <section className="posts">
                <article>
                    <header>
                        <span className="date">August 12, 2020</span>
                        <h2>Cocktails Recipes</h2>
                    </header>
                    <img className="image-fit" src={require('../assets/images/cocktails-screenshot.png')} alt="Project screenshot" />
                    <p>A react application that pulls data from an api to provide a simple access portal for searching up popular cocktail recipes.</p>
                    <a href="https://cocktails-kevthedev.vercel.app/" target="_blank"  className="button" rel="noopener noreferrer">View Project</a>
                </article>   

                        <article>
                    <header>
                        <span className="date">July 24, 2020</span>
                        <h2>Secret Family Recipes</h2>
                    </header>
                    <img className="image-fit" src={require('../assets/images/secret-recipe.png')} alt="Project screenshot" />
                    <p>React application with full CRUD capabilites for allowing users to add, edit, and delete their most valuable family recipes.</p>
                    <a href="https://bw-secret-family-recipe-frontend.vercel.app/" target="_blank" className="button" rel="noopener noreferrer">View Project</a>
                </article>  
                <article>
                    <header>
                        <span className="date">June 26, 2020</span>
                        <h2>Spotify Suggester Landing Page</h2>
                    </header>
                    <img className="image-fit" src={require('../assets/images/spotify-suggester.png')} alt="Project screenshot" />
                    <p>A front end static marketing page for a private spotify suggester application.</p>
                    <a href="https://spotify-suggester-melon.netlify.app/landing.html" target="_blank" className="button" rel="noopener noreferrer">View Project</a>
                </article>  
                <article>
                    <header>
                        <span className="date">August 10, 2020</span>
                        <h2>Reducer Todo</h2>
                    </header>
                    <img className="image-fit" src={require('../assets/images/reducer-todo.png')} alt="Project screenshot" />
                    <p>A simple and minimalistic todo application created with the use of react and reducer functions</p>
                    <a href="https://reducer-todo-8oft0equ5.vercel.app/" target="_blank" className="button" rel="noopener noreferrer">View Project</a>
                </article>  
            </section>

</div>

    )
}

export default Projects