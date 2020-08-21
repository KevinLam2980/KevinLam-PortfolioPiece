import React from 'react'


const Header = props => {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    return (
        <section id="intro">
            <h1>Kevin Lam</h1>
            <h2>Web Developer</h2>
            <p>Full Stack developer specializing in Javascript, React, and Redux</p>
                <a href="#nav" className="button icon circle actions">scroll</a>
         </section>
    )
}

export default Header