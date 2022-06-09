import React from "react";
import "./style.css"
import image from "./img/museum.jpg"

const About = () => {
    return (

        <div className="container-fluid">
        <img className="museum"  src={image} alt="cincinnati museum"></img>
        <div className="parent">
        <div className="div1 container">
                 <p className="center">About Cincinnati</p>
                </div>
                <div className="div2 ">
                    <p>Cincinnati is a city with rich history and a promising future. From its roots as a small town to the present as a metropolis with activities around every corner. Activities such as glow, Bierfest, Cincinnati Comic Expo, Bunberry and many more. With our historic land marks such as fountain square, Finnlay Market, and Cincinnati Music Hall. Please be a part of Cincinnati history.</p>
                </div>
                </div>
        </div>
        
    )
}

export default About