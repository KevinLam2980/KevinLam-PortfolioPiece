import React from 'react'

const Projects = props => {

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
                        <h2>Cocktails Recipe Website</h2>
                    </header>
                    <img className="image-fit" src={require('../assets/images/cocktails-screenshot.png')} alt="Project screenshot" />
                    <p>A react application that pulls data from an api to provide a simple access portal for searching up popular cocktail recipes.</p>
                    <a href="https://cocktails-kevthedev.vercel.app/" target="_blank" className="button">View Project</a>
                </article>   

                        <article>
                    <header>
                        <span className="date">August 12, 2020</span>
                        <h2>Cocktails Recipe Website</h2>
                    </header>
                    <img className="image-fit" src={require('../assets/images/cocktails-screenshot.png')} alt="Project screenshot" />
                    <p>A react application that pulls data from an api to provide a simple access portal for searching up popular cocktail recipes.</p>
                    <a href="https://cocktails-kevthedev.vercel.app/" target="_blank" className="button">View Project</a>
                </article>  
                <article>
                    <header>
                        <span className="date">August 12, 2020</span>
                        <h2>Cocktails Recipe Website</h2>
                    </header>
                    <img className="image-fit" src={require('../assets/images/cocktails-screenshot.png')} alt="Project screenshot" />
                    <p>A react app that pulls data from an api to provide a simple access portal for searching up popular cocktail recipes.</p>
                    <a href="https://cocktails-kevthedev.vercel.app/" target="_blank" className="button">View Project</a>
                </article>  
                <article>
                    <header>
                        <span className="date">August 12, 2020</span>
                        <h2>Cocktails Recipe Website</h2>
                    </header>
                    <img className="image-fit" src={require('../assets/images/cocktails-screenshot.png')} alt="Project screenshot" />
                    <p>A react app that pulls data from an api to provide a simple access portal for searching up popular cocktail recipes.</p>
                    <a href="https://cocktails-kevthedev.vercel.app/" target="_blank" className="button">View Project</a>
                </article>    
            </section>

</div>

    )
}

export default Projects