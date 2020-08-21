import React from 'react'
import {NavLink} from 'react-router-dom'


const NavBar = props => {

    return (
        <nav id="nav">
        <ul className="links">
            <NavLink to='/projects' index={true} activeClassName="active">
                <li >Projects</li>
            </NavLink>
            <NavLink to='/skills' activeClassName="active">
                <li >Skills</li>
            </NavLink>
            <NavLink to='/about' activeClassName="active">
                <li >About Me</li>
            </NavLink>
            <NavLink to='/contact' activeClassName="active">
                <li>Contact</li>    
            </NavLink>
            <NavLink to='/blog' activeClassName="active">
                <li>Blog</li>    
            </NavLink>
       
        </ul>
    </nav>
    )
}

export default NavBar