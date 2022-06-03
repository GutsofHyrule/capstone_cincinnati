import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='nav-wrapper black'>

            <div className="container">
                <a href='/' className='cincy-logo'>Cincinnati</a>
                <ul className='right'>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/places'>Places</Link></li>
                    <li><NavLink to='/events'>Events</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)