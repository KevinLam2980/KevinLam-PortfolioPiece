import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = props => {
    
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });

    return (
        <section id="intro">
            <h1>Kevin Lam</h1>
            <h2>Web Developer</h2>
            <p>Full Stack developer specializing in Javascript, React, Redux, and Java Spring</p>
                {/* <a href="#nav" className="button icon circle actions" id="scrollerBTN">scroll</a> */}
            <div id="socialMobile">
                <a href="https://github.com/KevinLam2980" alt="Github link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]}/></a>
                <a href="https://www.linkedin.com/in/kevin-lam-8729281a3/" alt="Linkedin link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
            </div>
         </section>
    )
}

export default Header