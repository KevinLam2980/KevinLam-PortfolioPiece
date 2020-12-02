import React, { useEffect } from 'react'
import FadeInSection from './FadeInSection'

const Projects = props => {

    // useEffect(() => {
    //     document.getElementById("scrollerBTN").click()
    //   }, [])

    return (
        <div id="main">
            <article className="post">
                <header className="major">
                    <h2>Projects</h2>
                </header>
            </article>

            <section className="posts">
           
                <article>    
                    <FadeInSection>
                        <header>
                            <span className="date">September 2020</span>
                            <h2>Citrics</h2>
                        </header>
                        <img className="image-fit" src={require('../assets/images/citrics.png')} alt="Project screenshot" />
                        </FadeInSection>
                        <FadeInSection>
                        <p>Full stack informational website used to compare different cities within the United States. Users can view data stats of cities such as; population, weather, prevalent career tracks, and more.</p>
                        </FadeInSection>
                        <FadeInSection>
                        {/* <a href="https://cocktails-kevthedev.vercel.app/" target="_blank"  className="button" rel="noopener noreferrer">View Project</a> */}
                      </FadeInSection>
                </article>   
             
         
                <article>
                    <FadeInSection>
                        <header>
                            <span className="date">July 24, 2020</span>
                            <h2>Secret Family Recipes</h2>
                        </header>
                        <img className="image-fit" src={require('../assets/images/secret-recipe.png')} alt="Project screenshot" />
                        </FadeInSection>
                        <FadeInSection>
                        <p>React application with full CRUD capabilites, allowing users to add, edit, and delete their own cooking recipes.</p>
                        </FadeInSection>
                        <FadeInSection>
                        <a href="https://bw-secret-family-recipe-frontend.vercel.app/" target="_blank" className="button" rel="noopener noreferrer">View Project</a>
                    </FadeInSection> 
                </article>  
            
                <article>
                    <FadeInSection>
                    <header>
                        <span className="date">June 26, 2020</span>
                        <h2>Spotify Suggester</h2>
                    </header>
                    <img className="image-fit" src={require('../assets/images/spotify-suggester.png')} alt="Project screenshot" />
                    </FadeInSection>
                    <FadeInSection>
                    <p>A song suggester application built to give users recomended songs based on the sound profiles, melody, and rythm of your favorite songs.</p>
                    </FadeInSection>
                    <FadeInSection>
                    <a href="https://spotify-suggester-melon.netlify.app/landing.html" target="_blank" className="button" rel="noopener noreferrer">View Project</a>
                    </FadeInSection>
                </article>  

                <article>
                <FadeInSection>
                    <header>
                        <span className="date">August 10, 2020</span>
                        <h2>Reducer Todo</h2>
                    </header>
                    <img className="image-fit" src={require('../assets/images/reducer-todo.png')} alt="Project screenshot" />
                    </FadeInSection>
                    <FadeInSection>
                    <p>A simple and minimalistic todo application created with the use of react and reducer functions</p>
                    </FadeInSection>
                    <FadeInSection>
                    <a href="https://reducer-todo-8oft0equ5.vercel.app/" target="_blank" className="button" rel="noopener noreferrer">View Project</a>
                    </FadeInSection>
                </article>  
            </section>
</div>

    )
}

export default Projects