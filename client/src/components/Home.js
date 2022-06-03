import React from "react";
import "./style.Habil.css"
import MyVideoComponent from "./video/video";
import myImage from "./video/cincnewy.png"

const Home = () => {
    return(
        
<div>

    
<MyVideoComponent/>
    <div className="container-fluid"><img  src={myImage} alt="" srcset=""/></div>


</div>
    )
}

export default (Home)