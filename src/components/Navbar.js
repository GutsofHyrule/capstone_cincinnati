import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className= 'nav-wrapper'>
    <div className = "container">
    <a href='/' className='cincy-logo'>Cincinnati</a>
        <ul>
            <li><Link to='/'></Link></li>
            <li className='dropdown-menu'><Link to='/places'>Places</Link></li>
            <li><Link to='/food'>Food</Link></li>
            <li><Link to ='/events'>Events</Link></li>
        </ul>
    </div>
        </nav>

    )
}

export default withRouter(Navbar)