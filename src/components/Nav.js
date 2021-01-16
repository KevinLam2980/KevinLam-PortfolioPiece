import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavHashLink } from 'react-router-hash-link'

library.add(fab)

const NavBar = props => {


    return (
        <nav id="nav">
        <ul className="links">
            <NavHashLink smooth to='/projects#nav' activeClassName="active">
                <li>Projects</li>
            </NavHashLink>
            <NavHashLink smooth to='/skills#nav' activeClassName="active">
                <li >About</li>
            </NavHashLink>
            {/* <NavHashLink smooth to='/about#nav' activeClassName="active">
                <li >About Me</li>
            </NavHashLink> */}
            <NavHashLink smooth to='/contact#nav' activeClassName="active">
                <li>Contact</li>    
            </NavHashLink>
            {/* <NavHashLink smooth to='/blog#nav' activeClassName="active">
                <li>Blog</li>    
            </NavHashLink> */}
       
        </ul>
        <div>
            <a href="https://github.com/KevinLam2980" alt="Github link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]}/></a>
            <a href="https://www.linkedin.com/in/kevin-lam-8729281a3/" alt="Linkedin link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
            
        </div>
    </nav>
    )
}

export default NavBar