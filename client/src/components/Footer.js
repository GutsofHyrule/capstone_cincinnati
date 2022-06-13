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
                <a href='https://github.com/habil-tabesh' className="links">GitHub</a>
                <a href='https://habil-tabesh.github.io/Portfolio/' className="links">Portfolio</a>
            </div>

            <div className= "footer-row">
                <p className="group">Spencer</p> <a href='https://www.linkedin.com/in/spencer-dresmann-0b78521b2/' className="links">LinkedIn</a>
                <a href='https://github.com/GutsofHyrule' className="links">GitHub</a>
                <a href='http://gutsofhyrule.github.io/portfolio/' className="links">Portfolio</a>
            </div>

            <div className= "footer-row">
                <p className="group">Karim</p> <a href='www.linkedin.com/in/karim-amidou-74b55122a' className="links">LinkedIn</a> 
                <a href='https://github.com/Abdul0626' className="links">GitHub</a>
                <a href='https://github.com/Abdul0626/karimPortfolio' className="links">Portfolio</a>
            </div>
        </div>              
    </div>
    )
}

export default (Footer)