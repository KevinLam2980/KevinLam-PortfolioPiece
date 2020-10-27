import React from 'react'
import {NavLink} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

const NavBar = props => {


    return (
        <nav id="nav">
        <ul className="links">
            <NavLink to='/projects' activeClassName="active">
                <li>Projects</li>
            </NavLink>
            <NavLink to='/skills' activeClassName="active">
                <li >Skills</li>
            </NavLink>
            {/* <NavLink to='/about' activeClassName="active">
                <li >About Me</li>
            </NavLink> */}
            <NavLink to='/contact' activeClassName="active">
                <li>Contact</li>    
            </NavLink>
            {/* <NavLink to='/blog' activeClassName="active">
                <li>Blog</li>    
            </NavLink> */}
       
        </ul>
        <div>
            <a href="https://github.com/KevinLam2980" alt="Github link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]}/></a>
            <a href="https://www.linkedin.com/in/kevin-lam-8729281a3/" alt="Linkedin link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
            
        </div>
    </nav>
    )
}

export default NavBar