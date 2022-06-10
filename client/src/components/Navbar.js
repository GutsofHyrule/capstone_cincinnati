import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import Logo from './img/logo.png'
import "./style.css"


const Navbar = () => {
    return (
        <nav className='nav-wrapper  sticky-top'>

            <div className="container " id='navbar'>
           <img className='cincy-logo left' src={Logo} alt=""></img>
                <ul className='right'>
                    <li className='right1'><Link className="links"to='/'>Home</Link></li>
                    <li className='right1'><Link className="links"to='/about'>About</Link></li>
                    <li className='right1'><Link className="links"to='/contact'>Contact</Link></li>
                    <li className='right1'><Link className="links"to='/amusements'>Places</Link></li>
                    <li className='right1'><NavLink className="links"to='/events'>Events</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)