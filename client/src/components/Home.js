import React from "react";
import "./style.css"
import MyVideoComponent from "./video/video";
import myImage from "./video/new edited white.png"

const Home = () => {
    return(
        
<div>

    
<MyVideoComponent/>
    <div className="container-fluid"><img className='homeImg'  src={myImage} alt="" srcset=""/></div>
        

</div>
    )
}

export default (Home)