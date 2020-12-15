import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = props => {

    return (
        <section id="intro">
            <h1>Kevin Lam</h1>
            <h2>Full Stack Software Engineer</h2>
            <p>Welcome! My name is Kevin. I love building and desigining the look and functionality of web applications and will never get over the fact that such amazing things can be created with just a laptop and some will power. If you'd like to find out more about what I've been doing, please don't hesitate to contact me, as I will be looking forward from hearing from you.</p>
            <div id="socialMobile">
                <a href="https://github.com/KevinLam2980" alt="Github link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]}/></a>
                <a href="https://www.linkedin.com/in/kevin-lam-8729281a3/" alt="Linkedin link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
            </div>
         </section>
    )
}

export default Header