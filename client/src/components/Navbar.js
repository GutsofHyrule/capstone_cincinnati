import { useState } from "react";
import "./navbar.css";
import logo from "./img/logo.png";

export default function Navbar() {

 
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <a id="drop-shadow" href="/" className="brand-name">
        <img className="logo" id="drop-shadow" src={logo}></img>
      </a>
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
            <a  className='navElement'  href="/">Home</a>
          </li>
          <li>
            <a   className='navElement'  href="/about">About</a>
          </li>
          <li>
            <a  className='navElement'  href="/contact">Contact</a>
          </li>
          <li>
            <a   className='navElement' href="/amusements">Places</a>
          </li>
          <li>
            <a  className='navElement'  href="/events">Events</a>
          </li>
          <li>
            <a  className='navElement'  href="/FAQs">FAQs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
