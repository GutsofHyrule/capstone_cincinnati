import React from 'react';
import "./style.css"

const Footer = () => {
    return(
        <div className="main-footer">
        <div>
            <h1 className="group">March 2022 Capstone Crew</h1>
        </div>
        <div className= "foots">
            <div className= "footer-row">
                <p class="group">Habil</p><a href='https://www.linkedin.com/in/habil-tabesh-59292022b/' className="links">LinkedIn</a>
                <a href='https://github.com/Abdul0626' className="links">GitHub</a>
                <a href='https://github.com/Abdul0626' className="links">Portfolio</a>
            </div>

            <div className= "footer-row">
                <p className="group">Spencer</p> <a href='https://github.com/GutsofHyrule' className="links">LinkedIn</a>
                <a href='https://github.com/Abdul0626' className="links">GitHub</a>
                <a href='https://github.com/Abdul0626' className="links">Portfolio</a>
            </div>

            <div className= "footer-row">
                <p className="group">Karim</p> <a href='https://github.com/Abdul0626' className="links">LinkedIn</a> 
                <a href='https://github.com/Abdul0626' className="links">GitHub</a>
                <a href='https://github.com/Abdul0626' className="links">Portfolio</a>
            </div>
        </div>              
    </div>
    )
}

export default (Footer)