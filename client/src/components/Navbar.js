import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import Logo from './img/logo.png'
import "./style.css"


const Navbar = () => {
    return (
        <nav className='nav-wrapper navbar navbar-expand-lg '>
            <div className="container-fluid " id='navbar'>
           <img className='cincy-logo left' src={Logo} alt=""></img>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className='navbar-nav'>
                    <li className='right1 nav-item'><Link className="links nav-link"to='/'>Home</Link></li>
                    <li className='right1 nav-item'><Link className="links nav-link"to='/about'>About</Link></li>
                    <li className='right1 nav-item'><Link className="links nav-link"to='/contact'>Contact</Link></li>
                    <li className='right1 nav-item'><Link className="links nav-link"to='/FAQs'>FAQs</Link></li>
                    <li className='right1 nav-item'><NavLink className="links nav-link"to='/amusements'>Places</NavLink></li>
                    <li className='right1 nav-item'><NavLink className="links nav-link"to='/events'>Events</NavLink></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)