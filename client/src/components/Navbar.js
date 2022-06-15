import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

export default function Navbar() {

 
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <Link id="drop-shadow" to="/" className="brand-name">
        <img className="logo" id="drop-shadow" src={logo}></img>
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li >
            <Link  className='navElement'  to="/">Home</Link>
          </li>
          <li>
            <Link   className='navElement'  to="/about">About</Link>
          </li>
          <li>
            <Link  className='navElement'  to="/contact">Contact</Link>
          </li>
          <li>
            <Link   className='navElement' to="/amusements">Places</Link>
          </li>
          <li>
            <Link  className='navElement'  to="/events">Events</Link>
          </li>
          <li>
            <Link  className='navElement'  to="/FAQs">FAQs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
